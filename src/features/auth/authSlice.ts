import {
  LOGIN_USER,
  GET_LOGGED_USER,
  LOG_OUT_USER,
  REGISTER_USER,
} from "./authTypes";

const initialState = {
  user: {},
  accessToken: null,
  isLoggedIn: window.localStorage.getItem("token") ? true : false,
};

export const authSlice = (state = initialState, { type, payload }: any) => {
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
        isLoggedIn: window.localStorage.getItem("token") ? true : false,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        accessToken: payload.accessToken,
        user: payload.user,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
