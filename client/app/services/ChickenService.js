import { api } from "./AxiosService.js"

class ChickenService {
    drawChickens() {
        const response = api.get('api/posts')
        console.log('chickens get', response.data);
    }
}


export const chickenService = new ChickenService()