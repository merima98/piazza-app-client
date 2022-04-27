import { combineReducers } from "redux";

import { authSlice } from "./features/auth/authSlice";
import { postsSlice } from "./features/posts/postsSlice";
import { userSlice } from "./features/user/userSlice";

const rootReducer = combineReducers({
  authSlice: authSlice,
  postsSlice: postsSlice,
  userSlice: userSlice,
});

export default rootReducer;
