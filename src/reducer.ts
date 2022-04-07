import { combineReducers } from "redux";

import { registrationSlice } from "./features/registration/registrationSlice";
import { postsSlice } from "./features/posts/postsSlice";
import { userSlice } from "./features/user/userSlice";

const rootReducer = combineReducers({
  registrationSlice: registrationSlice,
  postsSlice: postsSlice,
  userSlice: userSlice,
});

export default rootReducer;
