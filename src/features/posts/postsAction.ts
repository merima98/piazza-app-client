import * as api from "../../api/api";
import { GET_ALL_POSTS, ADD_NEW_POST } from "./postsTypes";

const getAllPosts = () => async (dispatch: any) => {
  const { data } = await api.default.getAllPosts();
  dispatch({ type: GET_ALL_POSTS, payload: data });
};

const addNewPost = (values: any) => async (dispatch: any) => {
  const { data } = await api.default.addNewPost(values);
  dispatch({ type: ADD_NEW_POST, payload: data });
};

const exports = {
  getAllPosts,
  addNewPost,
};

export default exports;
