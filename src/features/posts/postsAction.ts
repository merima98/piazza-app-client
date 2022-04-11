import * as api from "../../api/api";
import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
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
  dispatch({ type: DELETE_POST_BY_ID, payload: data });
};

const updatePostById =
  (postId: number, values: any) => async (dispatch: any) => {
    const { data } = await api.default.updatePost(postId, values);
    dispatch({ type: UPDATE_POST_BY_ID, payload: data });
  };
const exports = {
  getAllPosts,
  addNewPost,
  getPostById,
  detetePostBId,
  updatePostById,
};

export default exports;
