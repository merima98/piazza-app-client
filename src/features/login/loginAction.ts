import { FieldValues } from "react-hook-form";

import * as api from "../../api/api";
import { LOGIN_USER, GET_LOGGED_USER } from "./loginTypes";

const loginUser = (values: FieldValues) => async (dispatch: any) => {
  const { data } = await api.default.login(values);
  dispatch({ type: LOGIN_USER, payload: data });
  window.localStorage.setItem("token", data.accessToken);
};

export const isLogin = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_LOGGED_USER,
      payload: window.localStorage.getItem("token") ? true : false,
    });
  } catch (error) {
    console.log(error);
  }
};

const exports = {
  loginUser,
  isLogin,
};

export default exports;
