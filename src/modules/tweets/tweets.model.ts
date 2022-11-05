import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Tweet as TweetDB } from '@prisma/client';

@ObjectType()
export class Tweet {
  @Field(() => Int)
  id: TweetDB[`id`];

  @Field(() => GraphQLISODateTime)
  createdAt: TweetDB[`createdAt`];

  @Field(() => GraphQLISODateTime)
  updatedAt: TweetDB[`updatedAt`];

  @Field(() => String)
  content: TweetDB[`content`];

  @Field(() => Int)
  userId: TweetDB[`userId`];
}
