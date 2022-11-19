import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'modules/common/models/base.model';

@ObjectType({ isAbstract: true })
export class Domain extends BaseModel {
  @Field(() => String, { nullable: true })
  domain?: string;
}
