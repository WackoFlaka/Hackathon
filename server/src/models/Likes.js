import { Schema } from "mongoose";

export const LikeSchema = new Schema ( {
    accountId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Account'
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

LikeSchema.virtual('likeProfile', {
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})