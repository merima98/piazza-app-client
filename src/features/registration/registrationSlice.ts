import { GET_REGISTERED_USER, REGISTER_USER } from "./registrationTypes";

const initialState = {
  user: {},
  accessToken: null,
  isLoggedIn: window.localStorage.getItem("token") ? true : false,
};

export const registrationSlice = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        accessToken: payload.accessToken,
        user: payload.user,
        isLoggedIn: true,
      };

    case GET_REGISTERED_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
