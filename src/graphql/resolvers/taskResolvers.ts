import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { TaskService } from '../../services/taskService';
import { Task } from '../entities/taskEntity';
import { TaskInput } from '../inputs/taskInputs';

@Resolver()
export class TaskResolver
{
    constructor(
        private readonly taskService = new TaskService()
    ){};

    @Query(() => [Task])
    getTasks(){
        return this.taskService.getTask();
    }

    @Mutation(() => Task)
    createTask(
        @Arg('payload') payload: TaskInput
    ): Task{
        const task = this.taskService.addTask(payload);
        return task;
    };

    @Mutation(() => String)
    updateTask(
        @Arg('id') id: string,
        @Arg('name') name: string,
    ): String{
        const response = this.taskService.updateTask(id, name);
        return response;
    };

    @Mutation(() => String)
    deleteTask(
        @Arg('id') id: string,
    ): String{
        const response = this.taskService.deleteTask(id);
        return response;
    }
};