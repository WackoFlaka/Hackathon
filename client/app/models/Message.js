export class Message {
    constructor(data) {
        this.name = data.message_profile.name
        this.picture = data.message_profile.picture
        this.message_body = data.message_body
        this.recipientId = data.recipientId
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.id = data._id
    }
    
    
    get SenderMessage() {
        return /*html*/ `
        <div class="message blue-bg">
              <div class="message-sender">${this.name}</div>
              <div class="message-text">${this.message_body}</div>
            </div>
            <!-- <div class="message gray-bg">
              <div class="message-sender">Zachary</div>
              <div class="message-text">Hey Joaquin!</div>
            </div> -->
        `
    }
    
    get recipient() {
        return /*html*/  ``
     }
    
}