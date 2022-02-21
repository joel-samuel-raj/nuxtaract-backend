import { Post } from './post.interface';
import { CreatePostDto } from './post.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async create(createPostDto: CreatePostDto): Promise <Post> {
        const createdPost = new this.postModel(createPostDto)
        return await createdPost.save()
    }

    async findAll(): Promise<Post[]> {
        return await this.postModel.find({}).sort({"fromDate" : 1})
    } 
}
