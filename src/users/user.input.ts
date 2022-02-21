import { Field, Int, InputType } from "@nestjs/graphql"

@InputType()
export class userInput {
    @Field({nullable : true})
    readonly googleId: string

    @Field({nullable : true})
    readonly name: string

    @Field({nullable : true})
    readonly email: string

    @Field({nullable : true})
    readonly photo: string

    @Field(() => Date, {nullable : true})
    readonly dateJoined: Date

    @Field({nullable : true})
    readonly rollNumber? : string

    @Field(() => Int, {nullable : true})
    readonly batch? : number

    @Field({nullable : true})
    readonly department? : string

    @Field({nullable : true})
    readonly phoneNumber? : string

    @Field({nullable : true})
    readonly isAdmin? : boolean

    @Field(() => [ String ], {nullable : true})
    readonly events? : string[]

    @Field({nullable : true})
    readonly role? : string

    @Field(() => Int, {nullable : true})
    readonly team? : number 

    @Field(() => Int, {nullable : true})
    readonly year? : number 

}