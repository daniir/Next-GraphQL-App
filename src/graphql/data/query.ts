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

export const GET_PROJECT_WITH_TASKS = gql`
    query ($id: String!){
        getProjectWithTask(id: $id){
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