import Login from "../features/login/Login";
import Registration from "../features/registration/Registration";

const ROUTES = [
  {
    path: "/",
    element: Registration,
  },
  {
    path: "/login",
    element: Login,
  },
];

export { ROUTES };
