import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class ProjectInput
{
    @Field()
    name!: string;

    @Field()
    description?: string;
};