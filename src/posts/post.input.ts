import { Field, InputType } from "@nestjs/graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";

@InputType()
export class postInput {
    
    @Field({ nullable: true })
    name?: string
    
    @Field( { nullable: true })
    batch?: string
    
    @Field(() => [ GraphQLUpload ] || [ String ], { nullable: true })
    images?: Array<FileUpload> | Array<string>
    
    @Field(() => [ GraphQLUpload ] || [ String ], { nullable: true })
    posters?: Array<FileUpload> | Array<string>
    
    @Field({ nullable: true })
    description?: string 
    
    @Field({ nullable: true })
    fromDate?: string
    
    @Field({ nullable: true })
    toDate?: string
    
    @Field({ nullable: true })
    session?: string

    @Field({ nullable: true })
    venue?: string
    
    @Field(() => [ String ], { nullable: true })
    participants?: Array<string>
    
    @Field({ nullable: true })
    participantsCount?: string
    
    @Field(() => [ String ], { nullable: true })
    chairman?: Array<string>
}