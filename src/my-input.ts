import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('MyInput')
export class MyInput {
  @Field(() => Int, {
    description: '123',
    deprecationReason: 'This field is deprecated',
  })
  inputField: number;
}
