import * as api from "../../api/api";
import { GET_USER_BY_ID } from "./userTypes";

const getUserById = (userId: number) => async (dispatch: any) => {
  const { data } = await api.default.getUserById(userId);
  dispatch({ type: GET_USER_BY_ID, payload: data });
};

const exports = {
  getUserById,
};

export default exports;
