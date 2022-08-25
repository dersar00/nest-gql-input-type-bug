import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('OtherObject')
export class OtherObject {
  @Field(() => String)
  field: string;
}
