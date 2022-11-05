import { Query, Resolver } from '@nestjs/graphql';
import { Tweet } from 'src/modules/tweets/tweets.model';
import { TweetsService } from 'src/modules/tweets/tweets.service';

@Resolver()
export class ApiResolver {
  constructor(private readonly tweetsService: TweetsService) {}

  @Query(() => [Tweet])
  async getTweets() {
    return this.tweetsService.getTweets();
  }
}
