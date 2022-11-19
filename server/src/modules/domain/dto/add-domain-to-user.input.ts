import { Field, InputType } from '@nestjs/graphql';
import { FindUserInput } from 'modules/user/dto/find-user.input';

@InputType()
export class AddDomainToUserInput {
  @Field(() => FindUserInput, { nullable: true })
  user?: FindUserInput;

  @Field(() => String, { nullable: true })
  domain?: string;
}
