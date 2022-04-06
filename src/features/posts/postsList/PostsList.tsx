import { Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import postsAction from "../postsAction";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector((state: { postsSlice: any }) => ({
    posts: state.postsSlice.posts,
  }));

  useEffect(() => {
    dispatch(postsAction.getAllPosts());
  }, []);

  return (
    <Center flexDirection={"column"} backgroundColor={"red"} mt={20}>
      {posts.posts.map((post: any) => {
        return <div key={post.id}>{post.content}</div>;
      })}
    </Center>
  );
}

export default PostsList;
