import axios from "axios"
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server";


const API_ENDPOINT = {
    GET_LIST: '/api/users',
    CREATE_NEW: '/api/users',
    GET_ROLES: '/api/roles',
    GET_DETAILS: '/api/users/',
    GET_USER_ROLES: '/api/users/',
    UPDATE_USER: '/api/users/',
}

const configs = {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
}

class UserService {
    getList = async () => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_LIST, configs);
    }
    
    createNew = async (data) => {
        return await axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW, data, configs);
    }

    getRoleList = async (data) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_ROLES, configs);
    }

    getDetails = async (userId) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_DETAILS + userId, configs);
    }

    getUserRoles = async (userId) => {
        return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_USER_ROLES + userId + '/roles', configs);
    }

    updateUser = async (userId, data) => {
        return await axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_USER + userId, data, configs);
    }
}

const userService = new UserService();
export default userService;

