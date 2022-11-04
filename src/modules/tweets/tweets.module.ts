import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TweetsRepository } from './tweets.repository';
import { TweetsService } from './tweets.service';

@Module({
  imports: [PrismaService],
  providers: [TweetsRepository, TweetsService],
})
export class TweetsModule {}
