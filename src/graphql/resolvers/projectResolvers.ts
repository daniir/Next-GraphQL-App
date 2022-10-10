import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { ProjectService } from '../../services/projectService';
import type { Context } from '../context';
import { Project } from '../entities/projectEntity';
import { ProjectInput } from '../inputs/projectInputs';

@Resolver()
export class ProjectResolver
{
    @Query(() => [Project])
    async getProjects(
        @Ctx() ctx: Context,
    ) {
        try {
            const projects = await ctx.prisma.projects.findMany();
            if (!projects) return [];
            return projects;
        } catch (error) {
            console.error(`Query getAll Error: ${error}`);
        }
    };

    @Query(() => Project)
    async getProject(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ){
        try {
            const project = await ctx.prisma.projects.findFirstOrThrow({ where: { id } });
            if(!project) throw new Error(`Project with id: ${id} not found`);
            return project;
        } catch (error) {
            console.error(`Query getOne Error: ${error}`);
        }
    };
    
    @Mutation(() => Project)
    async createProject(
        @Arg('payload') payload: ProjectInput,
        @Ctx() ctx: Context,
    ){
        try {
            const { name, description } = payload;
            const project = await ctx.prisma.projects.create({
                data: {
                    name,
                    description,
                },
            });
            return project;
        } catch (error) {
            console.error(`Mutation create Error: ${error}`);
        }
    }
};