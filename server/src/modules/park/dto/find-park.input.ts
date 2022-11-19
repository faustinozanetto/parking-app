import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindParkInput {
  @Field(() => String, { nullable: true })
  uuid?: string;
}
