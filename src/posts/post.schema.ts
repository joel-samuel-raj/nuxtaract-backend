import * as mongoose from "mongoose"

export const PostSchema = new mongoose.Schema({
    name : String,
    batch : String,
    images : [ String ],
    posters : [ String ],
    description : String,
    fromDate : String,
    toDate : String,
    session : String,
    venue : String,
    participants : [ String ],
    participantsCount : String,
    chairman : [ String ],
    timeStamp : {
        type : Date,
        default : Date.now()
    }
})