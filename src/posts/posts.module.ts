import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Post", schema: PostSchema}])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
