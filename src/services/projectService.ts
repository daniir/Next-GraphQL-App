import { Project } from '../graphql/entities/projectEntity';
import { ProjectInput } from '../graphql/inputs/projectInputs';

const projects: [Project] = 
[
    {
        id: Date.now().toString(),
        name: 'project 1',
        description: 'project 1',
    },
];

export class ProjectService
{
    getProjects(): [Project] {
        return projects;
    };

    getProject(id: string): Project {
        const project = projects.find(p => p.id === id);
        if(!project){
            throw new Error(`Project ${id} not found`);
        } else {
            return project;
        }
    };

    createProject(payload: ProjectInput): Project {
        const project = {
            id: Date.now().toString(),
            ...payload
        };
        projects.push(project);

        return project;
    };

    updateProject(
        id: string,
        payload: ProjectInput
    ): Project{
        const projectIndex = projects.findIndex(p => p.id === id);
        projects[projectIndex] = {
            id,
            name: payload.name,
            description: payload.description,
        };
        return projects[projectIndex];
    };

    deleteProject(
        id: string
    ): string{
        const projectIndex = projects.findIndex(p => p.id === id);
        projects.splice(projectIndex, 1);
        return `The project ${id} has been deleted`
    };
};