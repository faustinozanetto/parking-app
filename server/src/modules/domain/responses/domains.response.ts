import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from 'modules/common/models/error.model';
import { Domain } from '../models/domain.model';

@ObjectType()
export class DomainsResponse {
  @Field(() => [Domain], { nullable: true })
  domains?: Domain[];

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
