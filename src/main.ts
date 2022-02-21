import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import passport from 'passport';
import session from 'express-session';
import { AppModule } from './app.module';
import { cookieKey } from './constants';
import  MongoStore from 'connect-mongo'
import { MONGO_DB_CONNECTION_STRING } from './constants'
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    methods:['GET','POST'],
    credentials: true 
  }))
  app.use(graphqlUploadExpress());
  app.use(session({
    store : MongoStore.create({ 
      mongoUrl : MONGO_DB_CONNECTION_STRING,
      dbName: "example-db",
      stringify: false,
    }),
    secret : cookieKey,
    resave : false,
    saveUninitialized : false,
    cookie : { maxAge: 7 * 24 * 60 * 60 * 1000},
    httpOnly : false,
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(process.env.PORT || 3000, () => {
    console.log('Hello World')
  });
}
bootstrap(); 
  