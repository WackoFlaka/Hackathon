import { AppState } from "../AppState.js"
import { messageService } from "../services/MessageService.js"
import { Pop } from "../utils/Pop.js"

export class MessageController {
    constructor() {
        console.log("Message Controller is loaded..")
        AppState.on('account', this.getMessages)
    }
    
    async getMessages() {
        try {
            const messages = await messageService.getMessages()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}