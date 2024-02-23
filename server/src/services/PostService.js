import { dbContext } from "../db/DbContext.js"

class PostService {
    async getAllPosts() {
        const posts = await dbContext.Posts.find()
        .populate('profile', 'name picture')
        return posts
    }
    
    async createPost(postData) {
        const post = await dbContext.Posts.create(postData)
        await post.populate('profile', 'name picture')
        return post
    }
    
}

export const postService = new PostService()