import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { MONGO_DB_CONNECTION_STRING } from './constants'
import { AppController } from './app.controller';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'graph.gql', 
    }),
    PostsModule,
    UsersModule,
    MongooseModule.forRoot(MONGO_DB_CONNECTION_STRING, () => {
      Logger.log("Mongo on the GO")
    }),
  ],
  controllers : [AppController]
})
export class AppModule {}