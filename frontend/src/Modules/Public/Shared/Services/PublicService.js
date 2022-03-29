
import axios from "axios";
import { BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
    GET_POST_LIST: '/api/posts/public',
    GET_CATEGORIES_LIST : '/api/post-categories/public'
}

class PublicService {

    getPostList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_LIST);
    }
    getCategoriesList = async () =>{
        return await axios.get(BASE_URL_SERVER +API_ENDPOINT.GET_CATEGORIES_LIST)
    }
}

const publicService = new PublicService();
export default publicService;