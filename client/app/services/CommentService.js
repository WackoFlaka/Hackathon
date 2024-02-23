import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class CommentsService {
    getComments(chickenId) {
        const detailedChicken = AppState.chickens.find(chick => chick.id == chickenId)

    }
}

export const commentsService = new CommentsService