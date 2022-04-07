import Login from "../features/login/Login";
import PostDetails from "../features/posts/postDetails/PostDetails";
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
  {
    path: "/post/:id",
    element: PostDetails,
  },
];

export { ROUTES };
