import { AppState } from "../AppState.js"
import { chickenService } from "../services/ChickenService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _paintChickens() {
    debugger
    const chickens = AppState.chickens
    let htmlString = ''
    chickens.forEach(chicken => htmlString += chicken.ChickenCard)
    console.log(htmlString);
    setHTML('chickenCards', htmlString)

}

export class ChickenController {

    constructor() {
        AppState.on('account', this.drawChickens)
        AppState.on('chickens', _paintChickens)
    }


    async getSpecificChicken() {
        tr
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