import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentService } from "../services/CommentService.js";

export class CommentController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)
    }
    
    async createComment(request, response, next) {
        try {
            const commentData = request.body
            commentData.accountId = request.userInfo.id
            const comment = await commentService.craeteComment(commentData)
            response.send(comment)
        } catch (error) {
            next(error)
        }
    }
}