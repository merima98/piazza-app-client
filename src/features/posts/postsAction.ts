import * as api from "../../api/api";
import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
} from "./postsTypes";

const getAllPosts = () => async (dispatch: any) => {
  const { data } = await api.default.getAllPosts();
  dispatch({ type: GET_ALL_POSTS, payload: data });
};

const addNewPost = (values: any) => async (dispatch: any) => {
  const { data } = await api.default.addNewPost(values);
  dispatch({ type: ADD_NEW_POST, payload: data });
};

const getPostById = (postId: number) => async (dispatch: any) => {
  const { data } = await api.default.getPostById(postId);
  dispatch({ type: GET_POST_BY_ID, payload: data });
};

const detetePostBId = (postId: number) => async (dispatch: any) => {
  const { data } = await api.default.deletePost(postId);
  console.log("Data after deleting post is - I am in postAction.ts, ", data);
  dispatch({ type: DELETE_POST_BY_ID, payload: data });
};

const exports = {
  getAllPosts,
  addNewPost,
  getPostById,
  detetePostBId,
};

export default exports;
