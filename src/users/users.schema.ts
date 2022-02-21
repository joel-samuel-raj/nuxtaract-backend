import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    googleId : String,
    name : String,
    email : String,
    photo : String,
    dateJoined : {
        type : Date,
        default : new Date
    },
    rollNumber : String,
    batch : Number,
    department : String,
    year : Number,
    phoneNumber : String,
    isAdmin : {
        type : Boolean,
        default : false  
    },
    events : [ String ],
    role : String,
    team : Number
}) 