import { InputType, Field } from 'type-graphql';

@InputType()
export class TaskInput
{
    @Field()
    name!: string;

    @Field()
    status!: boolean;
};