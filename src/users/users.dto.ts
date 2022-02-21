import { ObjectType, Field, Int, ID } from "@nestjs/graphql"
import { ObjectId } from "mongoose"

@ObjectType()
export class CreateUserDto {

    @Field(() => ID)
    readonly _id: string

    @Field()
    readonly googleId: string

    @Field()
    readonly name: string

    @Field()
    readonly email: string

    @Field()
    readonly photo: string

    @Field(() => Date)
    readonly dateJoined: Date

    @Field()
    readonly rollNumber? : string

    @Field(() => Int)
    readonly batch? : number

    @Field()
    readonly department? : string

    @Field()
    readonly phoneNumber? : string

    @Field()
    readonly isAdmin? : boolean

    @Field(() => [ String ])
    readonly events? : string[]

    @Field()
    readonly role? : string

    @Field(() => Int)
    readonly team? : number 

    @Field(() => Int)
    readonly year? : number 
}