export class Chicken {
    constructor(data) {
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.creatorId = data.creatorId
        this.id = data._id || data.id
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
                <div class="col-4 bird-details-card">
                  <h1>${this.title}</h1>
                  <p>${this.description}</p>
                </div>
                <div class="col-4 bird-details-card">
                  <p>placeholder for commetns</p>
                </div>
              </section>
            </div>
          </div>
       
        `
    }

}