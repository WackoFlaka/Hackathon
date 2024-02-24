import { AppState } from "../AppState.js"
import { chickenService } from "../services/ChickenService.js"
import { commentsService } from "../services/CommentService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

function _paintChickens() {

    const chickens = AppState.chickens
    let htmlString = ''
    chickens.forEach(chicken => htmlString += chicken.ChickenCard)
    // console.log(htmlString);
    setHTML('chickenCards', htmlString)

}
function _paintComments() {
    const chickens = AppState.chickens
    let htmlString = ''
    const comments = chickens.find(chick => htmlString += chick.commentBlock)
    setHTML('comments', htmlString)
}

export class ChickenController {

    constructor() {
        AppState.on('account', this.drawChickens)
        AppState.on('chickens', _paintChickens)
    }

    async getComments(chickenId) {
        try {
            const comments = await commentsService.getComments(chickenId)
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }

    async getSpecificChicken(chickenId) {
        const pulledChicken = AppState.chickens.find(chick => chick.id == chickenId)
        setHTML('detailedChicken', pulledChicken.ChickenDetails)

    }
    async drawChickens() {
        try {
            const chickens = await chickenService.drawChickens()

        } catch (error) {
            Pop.error(error)
            console.log(error);
        }
    }

}