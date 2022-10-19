import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
    mutation($payload: ProjectInput!){
        createProject(payload: $payload){
            id
            name
            description
        }
    }
`;