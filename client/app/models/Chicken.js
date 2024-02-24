export class Chicken {
    constructor(data) {
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.creatorId = data.creatorId
        this.id = data._id || data.id
        this.profile = data.profile
        this.comment = data.comment
    }

    get ChickenCard() {
        return `
        <div class="col-4 p-4 h-25">
        <div type="button" onclick="app.ChickenController.getSpecificChicken('${this.id}')" data-bs-toggle="modal" data-bs-target="#chickenModal" class="card text-center">
          <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
          </div>
        </div>

      </div>
        
        `
    }

    get ChickenDetails() {
        return `
          <div class="modal-body">
            <div class="container-fluid detail-picture" style="background-image: url(${this.imgUrl})">
              <section class="row justify-content-between">
                <div class="col-4 chicken-details-card">
                  <h1>${this.title}</h1>
                  <p>${this.description}</p>
                </div>
                <div class="col-4 chicken-details-card">
                  <p>${this.commentBlock}</p>
                </div>
              </section>
            </div>
          </div>
       
        `
    }
    get commentBlock() {
        if (this.id == this.comment.postId) {
            return `
        <div class="card text-center">
        <img class="card-img-start" src="${this.profile.picture}" alt="Title" />
        <h4 class="card-title">${this.profile.name}</h4>
        <div class="card-body">
          <p class="card-text">${this.comment.description}</p>
        </div>
      </div>
        `

        }
    }

}