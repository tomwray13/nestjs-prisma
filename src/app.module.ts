import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
