import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { messageService } from "../services/MessageService.js";

export class MessageController extends BaseController {
    constructor() {
        super('api/messages')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createMessage)
    }
    
    async createMessage(request, response, next) {
        try {
            const messageData = request.body
            messageData.creatorId = request.userInfo.id
            const message = await messageService.createMessage(messageData)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}