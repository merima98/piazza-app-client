import { combineReducers } from "redux";

import { registrationSlice } from "./features/registration/registrationSlice";

const rootReducer = combineReducers({
  registrationSlice: registrationSlice,
});

export default rootReducer;
