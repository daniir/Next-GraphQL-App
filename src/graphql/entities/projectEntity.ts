import { ObjectType, Field } from 'type-graphql';
import { Task } from './taskEntity';

@ObjectType()
export class Project
{
    @Field()
    id!: string;

    @Field()
    name!: string;

    @Field()
    description?: string;
};

@ObjectType()
export class ProjectWithTasks
{
    @Field()
    id!: string;

    @Field()
    name!: string;

    @Field()
    description?: string;

    @Field(type => [Task])
    tasks!: Task[];
}