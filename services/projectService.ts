import { Project } from '../src/graphql/entities/projectEntity';
import { ProjectInput } from '../src/graphql/inputs/projectInputs';

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
        return `the task ${id} has been deleted`
    };
};