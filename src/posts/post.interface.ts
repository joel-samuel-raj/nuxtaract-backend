import { Document, ObjectId } from 'mongoose'

export interface Post extends Document {
    readonly _id: ObjectId
    readonly name: string
    readonly batch: string
    readonly images: Array<string>
    readonly posters: Array<string>
    readonly description: string
    readonly fromDate: string
    readonly toDate: string
    readonly session: string
    readonly venue: string
    readonly participants: Array<string>
    readonly participantsCount: string
    readonly chairman: Array<string>
}