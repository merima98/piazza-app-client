import { GET_USER_BY_ID, UPDATE_USER_BY_ID } from "./userTypes";

const initialState = {
  user: {},
};

export const userSlice = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        user: payload,
      };
    case UPDATE_USER_BY_ID:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
