import axios from "axios";
import { BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
  ACCESS_AUTH_TOKEN: "/token",
  USER_REGISTER: "/api/user/register"
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
    return await axios.post(
      BASE_URL_SERVER + API_ENDPOINT.USER_REGISTER,
      data
    );
  }
}

const authService = new AuthService();
export default authService;
