import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from 'modules/common/models/error.model';
import { Domain } from '../models/domain.model';

@ObjectType()
export class DomainResponse {
  @Field(() => Domain, { nullable: true })
  domain?: Domain;

  @Field(() => [ErrorResponse], { nullable: true })
  errors?: ErrorResponse[];
}
