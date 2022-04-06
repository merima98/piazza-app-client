import { REGISTER_USER } from "./registrationTypes";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const registrationSlice = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case REGISTER_USER:
      return { ...state, user: payload, isLoggedIn: true };
    default:
      return state;
  }
};
