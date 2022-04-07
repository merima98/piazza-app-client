import { GET_ALL_POSTS, ADD_NEW_POST } from "./postsTypes";

const initialState = {
  posts: [],
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
    default:
      return state;
  }
};
