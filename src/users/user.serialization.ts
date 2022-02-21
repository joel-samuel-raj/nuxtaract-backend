import { Injectable } from "@nestjs/common";
import { PassportSerializer } from '@nestjs/passport';
import { ObjectId } from "mongoose";
import { User } from "./users.interface";
import { UsersService } from "./users.service";
 
@Injectable()
export class userSerializer extends PassportSerializer {
    constructor(private readonly userService: UsersService) {
        super();
    }
    serializeUser(user: User, done: Function) {
        done(null, user._id)
    }
    async deserializeUser(id: ObjectId, done: Function) {
        return this.userService.findById(id).then((user) => {
            // console.log("deserialized from session :", user)
            done(null, user)
        })
    }
}   