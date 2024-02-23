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
        <div class="col-4">
        <div type="button" onclick="app.ChickenController.getSpecificChicken(${this.id})" class="card text-center">
          <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
          </div>
        </div>

      </div>
        
        `
    }

}