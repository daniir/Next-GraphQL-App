import { Task } from '../graphql/entities/taskEntity';
import { TaskInput } from '../graphql/inputs/taskInputs';

const tasks: [Task] = [
    {
        id: '1',
        name: 'task 1',
        status: false,
    },
];

export class TaskService
{
    getTask(){
        return tasks;
    };

    addTask(
        payload: TaskInput
    ): Task{
        const task = {
            id: (tasks.length + 1).toString(),
            ...payload
        };

        tasks.push(task);
        return task;
    };

    updateTask(
        id: string,
        name: string
    ): String{
        const indexTask = tasks.findIndex(t => t.id === id);
        tasks[indexTask] = {
            id,
            name,
            status: false,
        };
        return `Task with ${id} has been updated`;
    };

    deleteTask(
        id: string
    ): String {
        const indexTask = tasks.findIndex(t => t.id === id);
        tasks.splice(indexTask, 1);
        return `Task with ${id} has been deleted`;
    };
}