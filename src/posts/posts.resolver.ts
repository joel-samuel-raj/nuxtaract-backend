import { postInput } from './post.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostDto } from './post.querydto';
import { PostsService } from './posts.service';
import { createWriteStream, ReadStream } from 'fs';
import { FileUpload } from 'graphql-upload';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  private async writeFile(
    stream: ReadStream,
    filename: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      stream
        .pipe(createWriteStream(`${process.cwd()}/src/posts/uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', (err) => reject(err));
    });
  }

  private async createFile(arr: any): Promise<string[]> {
    let stringArr: string[] = [];
    console.log(arr)
    const files = await Promise.all(arr);
    for (const file of files) {
        const fileExtension = file.filename.split('.').pop();
        const temp = file.filename.split('.');
        const fileName = `${temp.splice(0, temp.length - 1).join('')}-${Date.now()}.${fileExtension}`;
        this.writeFile(file.createReadStream(), fileName);
        stringArr.push(fileName);
    }
    return stringArr;
} 

  private async resolve(arr: FileUpload[] | string[], key: string, input: postInput) {
    const res = arr;
    const string = await this.createFile(res);
    input[key] = string;
    return input;
  }

  @Query(() => String)
  async hello () {
    return 'Hello'
  }

  @Query(() => [CreatePostDto])
  async posts () {
    return this.postsService.findAll()
  }

  @Mutation(() => Boolean )
  async createPost (@Args('input') input: postInput) {
    try {
      let images: FileUpload[] | string[] = input.images
      let posters: FileUpload[] | string[] = input.posters
      delete input.images
      delete input.posters
    //   Promise.all([
    //     this.createFile(images),
    //     this.createFile(posters)
    //   ]).then((values) => { 
    //       images = values[0], 
    //       posters = values[1]  
    //     }).then(() => { 
    //         input.images = images
    //         input.posters = posters
    //         this.postsService.create(input)
    //       })
    //   return true
    // } catch (error) {
      if(images && posters) {
        this.resolve(images, "images", input).then(() => {
          this.resolve(posters, "posters", input).then((res) => {
            this.postsService.create(res)
          })
        })
      }
      if(images && !posters) {
        this.resolve(images, "images", input).then((res) => {
          this.postsService.create(res)
          
        })
      }
      if(!images && posters) {
        this.resolve(posters, "posters", input).then((res) => {
          this.postsService.create(res)
        })
      }
      return true 
    } catch (error) {
      console.error(error)
      return false
    }
  }

  @Mutation(() => Boolean)
  async updatePosts(@Args('input') input: postInput) {
    console.log(input)
  }
 
}
 