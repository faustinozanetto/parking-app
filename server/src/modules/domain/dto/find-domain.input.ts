import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindDomainInput {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  domain?: string;
}
