import { combineReducers } from "redux";

import { registrationSlice } from "./features/registration/registrationSlice";
import { postsSlice } from "./features/posts/postsSlice";

const rootReducer = combineReducers({
  registrationSlice: registrationSlice,
  postsSlice: postsSlice,
});

export default rootReducer;
