import axios from "axios";
import { BASE_URL_SERVER } from "../../../../Configs/server";

export const currentUserId = localStorage.getItem("current_user_id");

const API_ENDPOINT = {
  ACCESS_AUTH_TOKEN: "/token",
  USER_REGISTER: "/api/user/register",
  GET_AUTH_USER: "/api/auth-user",
  GET_ROLES: "/api/auth-user/roles",
};

class AuthService {
  accessAuthToken = async (data) => {
    return await axios.post(
      BASE_URL_SERVER + API_ENDPOINT.ACCESS_AUTH_TOKEN,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  };

  registerNewUser = async (data) => {
    return await axios.post(BASE_URL_SERVER + API_ENDPOINT.USER_REGISTER, data);
  };

  getAuthUser = async (accessToken) => {
    return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_AUTH_USER, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  getUserRoles = async (accessToken) => {
    return await axios.get(
      BASE_URL_SERVER + API_ENDPOINT.GET_ROLES,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  };
}

const authService = new AuthService();
export default authService;
