import axios from "axios"
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server"


const API_ENDPOINT = {
    GET_LIST: "/api/post-categories",
    CREATE_NEW: "/api/post-categories",
    GET_DETAILS: "/api/post-categories/",
    UPDATE_DETAILS: "/api/post-categories/",
  UPDATE_THUMBNAIL: "/api/posts",
  UPDATE_STATUS: "/api/posts/",
}
export const POST_STATUS = {
    ACTIVE: "active",
  DEACTIVE: "deactive",
  DRAFT: "draft",
}
const configs = {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  };

class PostCategoryService {

    getList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_LIST, configs);
    }
    getCategoryDetail = async (id) =>{
        return await axios.get(BASE_URL_SERVER+API_ENDPOINT.GET_DETAILS + id, configs);
        
    }
    updateDetails = async (id, data) => {
      return await axios.put(
        BASE_URL_SERVER + API_ENDPOINT.UPDATE_DETAILS + id,
        data,
        configs
      );
    };

    createNew = async (data) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW, data, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
    }
    getListCategory = async (status = POST_STATUS.ACTIVE, search = '') => {
        return await axios.get(
          BASE_URL_SERVER + API_ENDPOINT.GET_LIST + `?status=${status}&&search=${search}`,
          configs
        );
    }
    

}

const postCategoryService = new PostCategoryService();
export default postCategoryService;