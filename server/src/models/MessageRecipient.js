import { Schema } from "mongoose";

export const MessageRecipientSchema = new Schema ({
    RecipientId: {
        type:Schema.Types.ObjectId,
        required: true,
        ref: 'Account'
    },
    MessageId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Message'
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}  
}
)

MessageRecipientSchema.virtual('recipient_profile', {
    ref: 'Account',
    localField: 'RecipientId',
    foreignField: '_id',
    justOne: true,
})