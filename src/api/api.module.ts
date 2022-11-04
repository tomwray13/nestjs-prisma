import { Module } from '@nestjs/common';
import { TweetsModule } from 'src/modules/tweets/tweets.module';
import { ApiController } from './api.controller';
import { ApiResolver } from './api.resolver';

@Module({
  imports: [TweetsModule],
  controllers: [ApiController],
  providers: [ApiResolver],
})
export class ApiModule {}
