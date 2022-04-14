import Login from "../features/login/Login";
import LatestPosts from "../features/posts/latestPosts/LatestPosts";
import PostDetails from "../features/posts/postDetails/PostDetails";
import PostsList from "../features/posts/postsList/PostsList";
import UserPostsList from "../features/posts/userPostsList/UserPostsList";
import Registration from "../features/registration/Registration";
import UserProfile from "../features/user/userProfile/UserProfile";

const LOGGED_OUT_ROUTES = [
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
    path: "/new-posts",
    element: LatestPosts,
  },
];

const LOGGED_IN_USER_ROUTES = [
  {
    path: "/",
    element: PostsList,
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
  {
    path: "/your-profile",
    element: UserProfile,
  },
];

export { LOGGED_IN_USER_ROUTES, LOGGED_OUT_ROUTES };
