import { AppState } from "../AppState.js"
import { Message } from "../models/Message.js"
import { api } from "./AxiosService.js"

class MessageService {
    async getMessages() {
        const response = await api.get('api/messages')
        console.log('messages recieved!', response.data)
        const newMessage = response.data.map(message => new Message(message))
        AppState.messages = newMessage
        AppState.emit('messages')
    }
    
}

export const messageService = new MessageService()