import { Field, InputType } from '@nestjs/graphql';
import { FindUserInput } from 'modules/user/dto/find-user.input';
import { FindDomainInput } from './find-domain.input';

@InputType()
export class RemoveDomainFromUserInput {
  @Field(() => FindUserInput, { nullable: true })
  user?: FindUserInput;

  @Field(() => FindDomainInput, { nullable: true })
  domain?: FindDomainInput;
}
