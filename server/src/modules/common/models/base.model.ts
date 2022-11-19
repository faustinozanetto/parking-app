import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseModel {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
