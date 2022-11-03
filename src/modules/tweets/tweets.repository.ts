import { Injectable } from '@nestjs/common';
import { Prisma, Tweet } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TweetsRepository {
  constructor(private prisma: PrismaService) {}

  async createTweet(params: { data: Prisma.TweetCreateInput }): Promise<Tweet> {
    const { data } = params;
    return this.prisma.tweet.create({ data });
  }

  async getTweets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TweetWhereUniqueInput;
    where?: Prisma.TweetWhereInput;
    orderBy?: Prisma.TweetOrderByWithRelationInput;
  }): Promise<Tweet[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.tweet.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateTweet(params: {
    where: Prisma.TweetWhereUniqueInput;
    data: Prisma.TweetUpdateInput;
  }): Promise<Tweet> {
    const { where, data } = params;
    return this.prisma.tweet.update({ where, data });
  }

  async deleteTweet(params: {
    where: Prisma.TweetWhereUniqueInput;
  }): Promise<Tweet> {
    const { where } = params;
    return this.prisma.tweet.delete({ where });
  }
}
