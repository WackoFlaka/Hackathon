import { dbContext } from "../db/DbContext.js"

class MessageService {
    async createMessage(messageData) {
        const message = await dbContext.Messages.create(messageData)
        await message.populate('message_profile')
        await message.populate('recipient')
        return message
    }
    
}

export const messageService = new MessageService()