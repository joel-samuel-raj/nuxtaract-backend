import { ObjectType, Field, ID } from "@nestjs/graphql"
import { ObjectId } from "mongoose"

@ObjectType()
export class CreatePostDto {
    @Field(() => ID) 
    readonly _id?: ObjectId
    @Field()
    readonly name?: string
    @Field()
    readonly batch?: string
    @Field(() =>  [ String ])
    readonly images?: Array<String>
    @Field(() => [ String ])
    readonly posters?: Array<String>
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