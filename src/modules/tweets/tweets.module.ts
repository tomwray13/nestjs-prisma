import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TweetsRepository } from './tweets.repository';

@Module({
  imports: [PrismaService],
  providers: [TweetsRepository],
})
export class TweetsModule {}
