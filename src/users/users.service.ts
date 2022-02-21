import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './users.interface';
import { userInput } from './user.input';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly UserModel: Model<User>) {  }

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(user);
    return await createdUser.save()
  }

  async findAll(): Promise<User[]> {
    return await this.UserModel.find().exec()
  }

  async findById(id: any): Promise<User> {
    return await this.UserModel.findOne({_id : id})
  }

  async findByIdAndUpdate(id: string, payload: userInput) {
    return await this.UserModel.findByIdAndUpdate({_id : id}, payload, { new : true })
  }

}