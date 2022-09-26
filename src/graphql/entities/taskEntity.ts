import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Task
{
    @Field()
    id!: string;

    @Field()
    name!: string;

    @Field()
    status!: boolean;
}