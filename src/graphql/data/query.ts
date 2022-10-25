import { gql } from '@apollo/client';

//Project Queries

export const GET_PROJECTS = gql`
    query {
        getProjects {
            id
            name
            description
        }
    }
`;

export const GET_PROJECT = gql`
    query ($id: String!){
        getProject(id: $id){
            id
            name
            description
            tasks {
                id
                name
                status
            }
        }
    }
`;