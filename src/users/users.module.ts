import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { GoogleStrategy } from './google.stratergy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { AuthCheckController, UsersController } from './users.controller';
import { userSerializer } from './user.serialization';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    PassportModule.register({
      session : true
    })
  ], 
  controllers : [UsersController, AuthCheckController],
  providers: [UsersResolver, UsersService, GoogleStrategy, userSerializer]
})
export class UsersModule {}
