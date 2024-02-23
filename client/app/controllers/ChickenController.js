import { chickenService } from "../services/ChickenService.js"
import { Pop } from "../utils/Pop.js"

function _paintChickens() {

}

export class ChickenController {

    constructor() {
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