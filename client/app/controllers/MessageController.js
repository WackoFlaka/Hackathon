import { AppState } from "../AppState.js"
import { messageService } from "../services/MessageService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMessage() {
    const messages = AppState.messages
    console.log(messages)
    let htmlString = ''
    messages.forEach(message => htmlString += message.SenderMessage)
    console.log(htmlString)
    setHTML('chat-messages', htmlString)
}

export class MessageController {
    constructor() {
        console.log("Message Controller is loaded..")
        AppState.on('account', this.getMessages)
        AppState.on('messages', _drawMessage)
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