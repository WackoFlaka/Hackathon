export class Comments {
    constructor(data) {
        this.description = data.description
        this.postedAt = data.updatedAt

    }

    get commentBlock() {
        return `
        
        `
    }
}