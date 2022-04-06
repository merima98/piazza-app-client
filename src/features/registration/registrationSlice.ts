import { REGISTER_USER } from "./registrationTypes";

const initialState = {
  user: {},
  accessToken: null,
  isLoggedIn: false,
};

export const registrationSlice = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case REGISTER_USER:
      const temp = {
        ...state,
        accessToken: payload.accessToken,
        user: payload.user,
        isLoggedIn: true,
      };
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
