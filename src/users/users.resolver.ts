import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { userInput } from './user.input';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [CreateUserDto])
  async Users() {
    return await this.usersService.findAll();
  }

  @Mutation(() => CreateUserDto)
  async registerUser(@Args("_id") _id: string, @Args("payload") payload: userInput): Promise<userInput> {
    return await this.usersService.findByIdAndUpdate(_id, payload) 
  }
}
