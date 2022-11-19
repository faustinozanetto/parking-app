import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from 'modules/common/models/error.model';
import { User } from '../models/user.model';

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
