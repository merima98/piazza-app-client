import { GET_ALL_POSTS, ADD_NEW_POST, GET_POST_BY_ID } from "./postsTypes";

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
    default:
      return state;
  }
};
