import * as api from "../../api/api";
import { GET_ALL_POSTS } from "./postsTypes";

const getAllPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.default.getAllPosts();
    dispatch({ type: GET_ALL_POSTS, payload: data });
  } catch (error: any) {
    console.log("This is an error from registration, ", error);
  }
};

const exports = {
  getAllPosts,
};

export default exports;
