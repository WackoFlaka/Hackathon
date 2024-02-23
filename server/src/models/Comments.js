import { Schema } from "mongoose";

export const CommentSchema = new Schema ( {
    accountId: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'Account'
    },
    
    description: {
        type: String,
        default: '',
        maxlength: 500
    },
    postId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    }
    
},
{
    timestamps: true,
    toJSON: {virtuals: true}
}
)

CommentSchema.virtual('commentProfile', {
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})

