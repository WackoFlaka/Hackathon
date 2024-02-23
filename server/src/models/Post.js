import { Schema } from "mongoose";

export const PostSchema = new Schema ( {
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    imgUrl: {
        type: String,
        required: true,
        maxLength: 500
    },
    description: {
        type: String,
        maxLength: 5000
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Account'
    }
}, 
{
    timestamps: true,
    toJSON: {virtuals: true}    
}
)