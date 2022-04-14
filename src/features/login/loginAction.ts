import { FieldValues } from "react-hook-form";

import * as api from "../../api/api";
import { LOGIN_USER, GET_LOGGED_USER, LOG_OUT_USER } from "./loginTypes";

const loginUser = (values: FieldValues) => async (dispatch: any) => {
  const { data } = await api.default.login(values);
  dispatch({ type: LOGIN_USER, payload: data });
  window.localStorage.setItem("token", data.accessToken);
  window.localStorage.setItem("userId", data.user.id);
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

export const logOut = () => async (dispatch: any) => {
  try {
    dispatch({
      type: LOG_OUT_USER,
      payload: window.localStorage.getItem("token") ? true : false,
    });
  } catch (error) {
    console.log(error);
  }
};

const exports = {
  loginUser,
  isLogin,
  logOut,
};

export default exports;
