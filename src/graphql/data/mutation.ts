import { gql } from '@apollo/client';

//Project Mutations

export const CREATE_PROJECT = gql`
    mutation ($payload: ProjectInput!){
        createProject(payload: $payload){
            id
            name
            description
        }
    }
`;

export const UPDATE_PROJECT = gql`
    mutation ($id: String!, $payload: ProjectInput!){
        updateProject(id: $id, payload: $payload)
    }
`;

export const DELETE_PROJECT = gql`
    mutation ($id: String!){
        deleteProject(id: $id)
    }
`;

//Tasks Mutations
export const CREATE_TASK = gql`
    mutation ($projectId: String!, $name: String!){
        createTask(projectId: $projectId, name: $name){
            id
            name
            status
        }
    }
`;