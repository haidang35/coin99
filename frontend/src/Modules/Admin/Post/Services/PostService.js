import axios from "axios";
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server";

const API_ENDPOINT = {
  GET_LIST: "/api/posts",
  CREATE_NEW: "/api/posts",
  UPLOAD_THUMBNAIL: "/api/posts/upload-thumbnail",
  GET_DETAILS: "/api/posts/",
  UPDATE_DETAILS: "/api/posts/",
  UPDATE_THUMBNAIL: "/api/posts/update-thumbnail",
  UPDATE_STATUS: "/api/posts/",
  DELETE: "/api/posts/",
};

const configs = {
  headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
};

export const POST_STATUS = {
  ACTIVE: "active",
  DEACTIVE: "deactive",
  DRAFT: "draft",
};

export const isPostStatus = (statusId) => {
  switch (statusId) {
    case 1:
      return POST_STATUS.ACTIVE;
      break;
    case 2:
      return POST_STATUS.DRAFT;
      break;
    case 0:
      return POST_STATUS.DEACTIVE;
      break;
    default:
      break;
  }
  return "";
};

class PostService {
  getList = async (status = POST_STATUS.ACTIVE, search = '') => {
    return await axios.get(
      BASE_URL_SERVER + API_ENDPOINT.GET_LIST + `?status=${status}&&search=${search}`,
      configs
    );
  };

  createNew = async (data) => {
    return await axios.post(
      BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW,
      data,
      configs
    );
  };

  uploadThumbnail = async (data) => {
    return await axios.post(
      BASE_URL_SERVER + API_ENDPOINT.UPLOAD_THUMBNAIL,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
  };

  getDetails = async (postId) => {
    return await axios.get(
      BASE_URL_SERVER + API_ENDPOINT.GET_DETAILS + postId,
      configs
    );
  };

  updateDetails = async (postId, data) => {
    return await axios.put(
      BASE_URL_SERVER + API_ENDPOINT.UPDATE_DETAILS + postId,
      data,
      configs
    );
  };

  updateThumbnail = async (postId, data) => {
    return await axios.post(
      BASE_URL_SERVER + API_ENDPOINT.UPDATE_THUMBNAIL + postId,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
  };

  updateStatus = async (postId, status = POST_STATUS.DEACTIVE) => {
    return await axios.get(
      BASE_URL_SERVER +
        API_ENDPOINT.UPDATE_STATUS +
        postId +
        `/update-status?status=${status}`,
      configs
    );
  };

  delete = async (postId) => {
    return await axios.delete(
      BASE_URL_SERVER + API_ENDPOINT.DELETE + postId,
      configs
    );
  };
}

const postService = new PostService();
export default postService;
