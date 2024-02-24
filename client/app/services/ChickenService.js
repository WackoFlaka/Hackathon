import { AppState } from "../AppState.js";
import { Chicken } from "../models/Chicken.js";
import { api } from "./AxiosService.js"

class ChickenService {
    async drawChickens() {

        const response = await api.get('api/posts')
        console.log('chickens get', response.data);
        const newChicken = response.data
        AppState.chickens = newChicken
        AppState.emit('chickens')
    }
}


export const chickenService = new ChickenService()