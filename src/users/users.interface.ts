import { Document } from 'mongoose'

export interface User extends Document {
    readonly googleId: string
    readonly name: string,
    readonly email: string,
    readonly photo: string,
    readonly dateJoined: Date,
    readonly rollNumber? : string,
    readonly batch? : number,
    readonly department? : string,
    readonly phonenumber? : string,
    readonly isAdmin? : boolean,
    readonly events? : Array<string>,
    readonly role? : string,
    readonly team? : number 
    readonly year? : number 


}