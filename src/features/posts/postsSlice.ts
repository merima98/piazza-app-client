import { GET_ALL_POSTS } from "./postsTypes";

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
    default:
      return state;
  }
};
