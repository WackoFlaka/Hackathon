import { dbContext } from "../db/DbContext.js"

class PostService {
    async getAllPosts() {
        const posts = await dbContext.Posts.find()
        .populate('profile', 'name picture')
        .populate('like')
        .populate('comment')
        return posts
    }
    
    async createPost(postData) {
        const post = await dbContext.Posts.create(postData)
        await post.populate('profile', 'name picture')
        await post.populate('like')
        await post.populate('comment')
        return post
    }
    
}

export const postService = new PostService()