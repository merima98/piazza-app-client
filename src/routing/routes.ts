import Login from "../features/login/Login";
import LatestPosts from "../features/posts/latestPosts/LatestPosts";
import PostDetails from "../features/posts/postDetails/PostDetails";
import PostsList from "../features/posts/postsList/PostsList";
import UserPostsList from "../features/posts/userPostsList/UserPostsList";
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
  {
    path: "/my-posts",
    element: UserPostsList,
  },
  {
    path: "/new-posts",
    element: LatestPosts,
  },
];

export { ROUTES };
