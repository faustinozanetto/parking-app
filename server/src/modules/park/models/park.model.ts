import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'modules/common/models/base.model';
import { Domain } from 'modules/domain/models/domain.model';
import { User } from 'modules/user/models/user.model';

@ObjectType({ isAbstract: true })
export class Park extends BaseModel {
  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => Domain, { nullable: true })
  domain?: Domain;

  @Field(() => User, { nullable: true })
  user?: User;
}
