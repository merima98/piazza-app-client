import { FieldValues } from "react-hook-form";

import * as api from "../../api/api";
import { REGISTER_USER } from "./registrationTypes";

const registeUser = (values: FieldValues) => async (dispatch: any) => {
  try {
    const { data } = await api.default.register(values);
    dispatch({ type: REGISTER_USER, payload: data });
    window.localStorage.setItem("token", data.accessToken);
  } catch (error: any) {
    console.log("This is an error from registration, ", error);
  }
};

const exports = {
  registeUser,
};

export default exports;
