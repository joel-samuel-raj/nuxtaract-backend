import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';
import { googleSecrets } from 'src/constants';
import { UsersService } from './users.service';
import { User } from './users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@InjectModel("User") private readonly UserModel: Model<User>) {
    super(googleSecrets);
  }
  
  async googleLogin(newUser): Promise<User> { 
    return this.UserModel.findOneAndUpdate(
      {googleId : newUser.googleId},
      {$setOnInsert: newUser},
      { 
        new : true,
        upsert : true,
      }
    ) 
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { id, displayName, emails, photos } = profile
    const user = {
      googleId : id,
      name: displayName,
      email : emails[0].value,
      photo : photos[0].value
    }
    return this.googleLogin(user).then((user) => { done(null, user) })
    // done(null, user);
  }
 
}