
import axios from "axios";
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
    GET_POST_LIST: '/api/posts/public',
    GET_CATEGORIES_LIST : '/api/post-categories/public',
    GET_POST_BY_SLUG: '/api/posts/',
    GET_RELATED_POSTS: '/api/posts/',
    REGISTER_ACCOUNT: '/api/user/register',
    GET_RECENT_POSTS: '/api/posts/recent-posts'

}

const configs = {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
}

class PublicService {

    getPostList = async (page = 1) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_LIST + `?pageNumber=${page}`);
    }

    getCategoriesList = async () =>{
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_CATEGORIES_LIST)
    }

    getPostBySlug = async (slug) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_POST_BY_SLUG + slug, configs);
    }
    
    registerAccount = async (data) => {
        return await axios.post(BASE_URL_SERVER + API_ENDPOINT.REGISTER_ACCOUNT, data);
    }

    getRelatedPosts = async (slug) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_RELATED_POSTS + slug + '/recent-posts');
    }

    getRecentPosts = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_RECENT_POSTS);
    }
}


const publicService = new PublicService();
export default publicService;