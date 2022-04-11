import { FieldValues } from "react-hook-form";

import * as api from "../../api/api";
import { REGISTER_USER } from "./registrationTypes";

const registeUser = (values: FieldValues) => async (dispatch: any) => {
  const { data } = await api.default.register(values);
  dispatch({ type: REGISTER_USER, payload: data });
  window.localStorage.setItem("token", data.accessToken);
  window.localStorage.setItem("userId", data.user.id);
};

const exports = {
  registeUser,
};

export default exports;
