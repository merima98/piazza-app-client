import * as api from "../../api/api";
import { GET_ALL_POSTS } from "./postsTypes";

const getAllPosts = () => async (dispatch: any) => {
  const { data } = await api.default.getAllPosts();
  dispatch({ type: GET_ALL_POSTS, payload: data });
};

const exports = {
  getAllPosts,
};

export default exports;
