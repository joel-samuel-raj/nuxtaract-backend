import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { ObjectType, Field} from "@nestjs/graphql"

@ObjectType()
export class CreatePostDto {
    @Field()
    readonly name?: string
    @Field()
    readonly batch?: string
    @Field(() => [ GraphQLUpload ] || [ String ])
    readonly images?: Array<FileUpload> | Array<String>
    @Field(() => [ GraphQLUpload ] || [ String ])
    readonly posters?: Array<FileUpload> | Array<String>
    @Field()
    readonly description?: string
    @Field()
    readonly fromDate?: string 
    @Field()
    readonly toDate?: string
    @Field()
    readonly session?: string
    @Field()
    readonly venue?: string
    @Field(() => [ String ])
    readonly participants?: Array<string>
    @Field()
    readonly participantsCount?: string
    @Field(() => [ String ])
    readonly chairman?: Array<string>
}