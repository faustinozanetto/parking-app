import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUserInput {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  dni?: string;
}
