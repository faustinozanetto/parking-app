import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from '../models/error.model';

@ObjectType()
export class DeleteObjectResponse {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
