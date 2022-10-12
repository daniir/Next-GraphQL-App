import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import type { Context } from '../context';
import { Project, ProjectWithTasks } from '../entities/projectEntity';
import { ProjectInput } from '../inputs/projectInputs';

@Resolver()
export class ProjectResolver
{
    @Query(() => [Project])
    async getProjects(
        @Ctx() ctx: Context,
    ){
        try {
            const projects = await ctx.prisma.projects.findMany();
            if (!projects) return [];
            return projects;
        } catch (error) {
            console.error(`Query getAll Error: ${error}`);
        };
    };

    @Query(() => ProjectWithTasks)
    async getProject(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ){
        try {
            const project = await ctx.prisma.projects.findFirst({
                where: { id },
                include: {
                    tasks: true
                }
            });
            if(!project) throw new Error(`Project with id: ${id} not found`);
            return project;
        } catch (error) {
            console.error(`Query getOne project Error: ${error}`);
        };
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
            console.error(`Mutation creating project Error: ${error}`);
        };
    };

    @Mutation(() => String)
    async updateProject(
        @Arg('id') id: string,
        @Arg('payload') payload: ProjectInput,
        @Ctx() ctx: Context,
    ){
        try {
            const { name, description } = payload;
            const project = await this.getProject(id, ctx);
            if(project){
                await ctx.prisma.projects.update({
                    where: { id },
                    data: {
                        name,
                        description,
                    },
                });
                return `Project with id: ${id} has been updated`;
            };
        } catch (error) {
            console.error(`Mutation project updated Error: ${error}`);
        };
    };

    @Mutation(() => String)
    async deleteProject(
        @Arg('id') id: string,
        @Ctx() ctx: Context,
    ){
        try {
            const project = await this.getProject(id, ctx);
            if(project){
                await ctx.prisma.projects.delete({ where: { id } });
                return `Project with id: ${id} has been deleted`;
            };
        } catch (error) {
            console.error(`Mutation project deleted Error: ${error}`);
        };
    };
};