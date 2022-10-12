import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import type { Context } from '../context';
import { Task } from '../entities/taskEntity';

@Resolver()
export class TaskResolver
{

    @Query(() => Task)
    async getTask(
        @Arg('id') id: string,
        @Ctx() ctx: Context,
    ){
        try {
            const task = await ctx.prisma.tasks.findFirst({ where: { id } });
            if(!task) throw new Error(`Task with id: ${id} not found`);
            return task;
        } catch (error) {
            console.error(`Query getOne task Error: ${error}`);
        };
    };

    @Mutation(() => Task)
    async createTask(
        @Arg('projectId') projectId: string,
        @Arg('name') name: string,
        @Ctx() ctx: Context
    ){
        try {
            const task = await ctx.prisma.tasks.create({
                data: {
                    name,
                    projectId
                },
            });
            return task;
        } catch (error) {
            console.error(`Error creating task error: ${error}`);
        };
    };

    @Mutation(() => Task)
    async updateTaskName(
        @Arg('id') id: string,
        @Arg('name') name: string,
        @Ctx() ctx: Context 
    ){
        try {
            const task = await this.getTask(id, ctx);
            if(task){
                const taskName = await ctx.prisma.tasks.update({
                    where: { id },
                    data: { name },
                });
                return taskName;
            };
        } catch (error) {
            console.error(`Mutation taskName updated Error: ${error}`);
        };
    };

    @Mutation(() => Boolean)
    async updateTaskStatus(
        @Arg('id') id: string,
        @Arg('status') status: boolean,
        @Ctx() ctx: Context,
    ){
        try {
            const task = await this.getTask(id, ctx);
            if(task){
                const statusTask = await ctx.prisma.tasks.update({
                    where: { id },
                    data: { status },
                });
                return statusTask.status;
            };
        } catch (error) {
            console.error(`Mutation taskstatus deleted Error: ${error}`);
        };
    };

    @Mutation(() => String)
    async deleteTask(
        @Arg('id') id: string,
        @Ctx() ctx: Context,
    ){
        try {
            const task = await this.getTask(id, ctx);
            if(task){
                await ctx.prisma.tasks.delete({ where: { id } });
                return `Task with id: ${id} has been deleted`;
            };
        } catch (error) {
            console.error(`Mutation task deleted Error: ${error}`);
        }
    };
};