import { FieldValues } from "react-hook-form";

import * as api from "../../api/api";
import { GET_REGISTERED_USER, REGISTER_USER } from "./registrationTypes";

const registeUser = (values: FieldValues) => async (dispatch: any) => {
  const { data } = await api.default.register(values);
  dispatch({ type: REGISTER_USER, payload: data });
  window.localStorage.setItem("token", data.accessToken);
  window.localStorage.setItem("userId", data.user.id);
};

const isRegisteredUser = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_REGISTERED_USER,
      payload: window.localStorage.getItem("token") ? true : false,
    });
  } catch (error) {
    console.log(error);
  }
};

const exports = {
  registeUser,
  isRegisteredUser,
};

export default exports;
