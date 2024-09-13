import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateSomeInput {
  @Field()
  name: string;

  @Field()
  foundation: string;

  @Field()
  location: string;

  @Field(() => [String])
  areas: string[];

  @Field()
  status: string;

  @Field(() => Float)
  amount: number;

  @Field(() => Date, { nullable: true })
  deadline?: Date;

  @Field(() => Date, { nullable: true })
  match_date?: Date;
}
