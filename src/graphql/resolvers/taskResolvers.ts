import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Task } from '../entities/taskEntity';
import { TaskInput } from '../inputs/taskInputs';

@Resolver()
export class TaskResolver
{
    constructor(){};

    // @Mutation(() => String)
    // createTask(projectId: string, payload: TaskInput){

    // }
};