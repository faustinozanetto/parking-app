import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from 'modules/common/models/error.model';
import { Park } from '../models/park.model';

@ObjectType()
export class ParkResponse {
  @Field(() => Park, { nullable: true })
  park?: Park;

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
