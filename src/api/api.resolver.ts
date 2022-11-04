import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ApiResolver {
  @Query(() => String)
  async getTweets() {
    return `All tweets`;
  }
}
