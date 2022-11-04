import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [TweetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
