import { dbContext } from "../db/DbContext.js"

class MessageService {
    async getMessages() {
        const messages = await dbContext.Messages.find()
        .populate('message_profile')
        return messages
    }
    async createMessage(messageData) {
        const message = await dbContext.Messages.create(messageData)
        await message.populate('message_profile')
        return message
    }
    
}

export const messageService = new MessageService()