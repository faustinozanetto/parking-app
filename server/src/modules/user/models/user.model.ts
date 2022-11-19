import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from 'modules/common/models/base.model';

@ObjectType({ isAbstract: true })
export class User extends BaseModel {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  surname?: string;

  @Field(() => String, { nullable: true })
  dni?: string;

  @Field(() => String, { nullable: true })
  email?: String;
}
