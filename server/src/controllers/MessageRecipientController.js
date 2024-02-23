import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { messageRecipientService } from "../services/MessageRecipientService.js";

export class MessageRecipientController extends BaseController {
    constructor() {
        super('api/recipients')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createRecipient)
    }
    
    async createRecipient(request, response, next) {
        try {
            const recipientData = request.body
            recipientData.RecipientId = request.userInfo.id
            const recipient = await messageRecipientService.createRecipient(recipientData)
            response.send(recipient)
        } catch (error) {
            next(error)
        }
    }
 }