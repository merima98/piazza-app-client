import * as api from "../../api/api";
import { GET_USER_BY_ID, UPDATE_USER_BY_ID } from "./userTypes";

const getUserById = (userId: number) => async (dispatch: any) => {
  const { data } = await api.default.getUserById(userId);
  dispatch({ type: GET_USER_BY_ID, payload: data });
};

const updateUser = (userId: number, userData: any) => async (dispatch: any) => {
  const { data } = await api.default.updateUser(userId, userData);
  dispatch({ type: UPDATE_USER_BY_ID, payload: data });
};

const exports = {
  getUserById,
  updateUser,
};

export default exports;
