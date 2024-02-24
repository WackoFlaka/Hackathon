export class Comments {
    constructor(data) {
        this.description = data.description
        this.postedAt = data.updatedAt

    }

    get commentBlock() {
        return `
        <div class="card text-center">
        <img class="card-img-start" src="holder.js/100px180/" alt="Title" />
        <h4 class="card-title">Name</h4>
        <div class="card-body">
          <p class="card-text">Comment</p>
        </div>
      </div>
        `
    }
}