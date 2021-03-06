import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  GET_USERS_POSTS,
  GET_NEW_POSTS,
} from "./postsTypes";

const initialState = {
  posts: [],
  post: {},
};

export const postsSlice = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: payload,
      };
    case DELETE_POST_BY_ID:
      return {
        ...state,
        posts: state.posts.filter((post) => post !== payload),
      };
    case UPDATE_POST_BY_ID:
      return {
        ...state,
        post: payload,
      };
    case GET_USERS_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_NEW_POSTS:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};
