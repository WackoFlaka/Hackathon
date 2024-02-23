import { dbContext } from "../db/DbContext.js"

class MessageRecipientService {
    async createRecipient(recipientData) {
        const recipient = await dbContext.Recipients.create(recipientData)
        await recipient.populate('recipient_profile')
    }
    
}

export const messageRecipientService = new MessageRecipientService()