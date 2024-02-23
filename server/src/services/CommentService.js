import { dbContext } from "../db/DbContext.js"

class CommentService {
    async craeteComment(commentData) {
        const comment = await dbContext.Comments.create(commentData)
        await comment.populate('commentProfile')
        return comment
    }
    
}

export const commentService = new CommentService()