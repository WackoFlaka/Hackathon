import { api } from "./AxiosService.js"

class MessageService {
    async getMessages() {
        const response = await api.get('api/messages')
        console.log('messages recieved!', response.data)
    }
    
}

export const messageService = new MessageService()