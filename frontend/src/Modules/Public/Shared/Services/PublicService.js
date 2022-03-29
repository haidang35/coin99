
import axios from "axios";
import { BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
    GET_POST_LIST: '/api/posts/public'
}

class PublicService {

    getPostList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_LIST);
    }
}

const publicService = new PublicService();
export default publicService;