import { Query, Resolver, Args } from '@nestjs/graphql';
import { MyObject } from './my-object';
import { MyInput } from './my-input';

@Resolver(() => MyObject)
export class MyResolver {
  @Query(() => MyObject, { name: 'object' })
  async getObject(@Args('inputDto') inputDto: MyInput) {
    console.log(inputDto);
    return { n: 42 };
  }
}
