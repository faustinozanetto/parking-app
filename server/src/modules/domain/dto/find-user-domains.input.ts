import { Field, InputType } from '@nestjs/graphql';
import { FindUserInput } from 'modules/user/dto/find-user.input';

@InputType()
export class FindUserDomainsInput {
  @Field(() => FindUserInput, { nullable: true })
  user?: FindUserInput;
}
