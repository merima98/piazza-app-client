import Login from "../features/login/Login";
import PostsList from "../features/posts/postsList/PostsList";
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
  {
    path: "/posts",
    element: PostsList,
  },
];

export { ROUTES };
