import { LOGIN_USER, GET_LOGGED_USER } from "./loginTypes";

const initialState = {
  user: {},
  accessToken: null,
  isLoggedIn: window.localStorage.getItem("token"),
};

export const loginSlice = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        accessToken: payload.accessToken,
        user: payload.user,
        isLoggedIn: true,
      };
    case GET_LOGGED_USER:
      return {
        ...state,
        isLoggedIn: window.localStorage.getItem("token"),
      };
    default:
      return state;
  }
};
