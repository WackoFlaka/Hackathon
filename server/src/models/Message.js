import { Schema } from "mongoose";

export const MessageSchema = new Schema ({
    creatorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Account'
    },
    recipientId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Account'  
    },
    message_body: {
        type: String,
        required: true,
        maxLength: 10000
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}  
}
)

MessageSchema.virtual('message_profile', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
})