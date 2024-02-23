import { Auth0Provider } from "@bcwdev/auth0provider";
import { postService } from "../services/PostService.js";
import BaseController from "../utils/BaseController.js";

export class PostController extends BaseController {
    constructor() {
        super('api/posts')
        this.router 
            .get('', this.getAllPosts)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPost)
    }
    
    async getAllPosts(request, response, next) {
        try {
            const posts = await postService.getAllPosts()
            response.send(posts)
        } catch (error) {
            next(error)
        }
    }
    
    async createPost(request, response, next) {
        try {
            const postData = request.body
            postData.creatorId = request.userInfo.id
            const post = await postService.createPost(postData)
            response.send(post)
            
        } catch (error) {
            next(error)
        }
    }
}