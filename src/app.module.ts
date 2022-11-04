import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';
import { ApiModule } from './api/api.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [TweetsModule, ApiModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
