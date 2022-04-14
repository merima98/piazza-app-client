import { combineReducers } from "redux";

import { registrationSlice } from "./features/registration/registrationSlice";
import { postsSlice } from "./features/posts/postsSlice";
import { userSlice } from "./features/user/userSlice";
import { loginSlice } from "./features/login/loginSlice";

const rootReducer = combineReducers({
  registrationSlice: registrationSlice,
  loginSlice: loginSlice,
  postsSlice: postsSlice,
  userSlice: userSlice,
});

export default rootReducer;
