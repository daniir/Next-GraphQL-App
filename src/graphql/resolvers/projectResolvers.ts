import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { ProjectService } from '../../services/projectService';
import { Project, ProjectWithTasks } from '../entities/projectEntity';
import { ProjectInput } from '../inputs/projectInputs';

@Resolver()
export class ProjectResolver
{

    constructor( 
        private readonly projectService = new ProjectService()
    ){}

    @Query(() => [Project])
    getProjects(){
        const projects = this.projectService.getProjects();
        return projects;
    };

    @Query(() => Project)
    getProject(
        @Arg('id') id: string
    ){
        const project = this.projectService.getProject(id);
        return project;
    };

    @Mutation(() => Project)
    createProject(
        @Arg('payload') payload: ProjectInput
    ){
        const project = this.projectService.createProject(payload);
        return project;
    };

    @Mutation(() => Project)
    updateProject(
        @Arg('id') id: string,
        @Arg('payload') payload: ProjectInput
    ){
        const project = this.projectService.updateProject(id, payload);
        return project;
    };

    @Mutation(() => String)
    deleteProject(
        @Arg('id') id: string
    ){
        const project = this.projectService.deleteProject(id);
        return project;
    };
};