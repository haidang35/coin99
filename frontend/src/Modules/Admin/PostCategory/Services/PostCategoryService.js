import axios from "axios"
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server"


const API_ENDPOINT = {
    GET_LIST: "/api/post-categories",
    CREATE_NEW: "/api/post-categories",
}

class PostCategoryService {

    getList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_LIST, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
    }

    createNew = async (data) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW, data, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
    }

}

const postCategoryService = new PostCategoryService();
export default postCategoryService;