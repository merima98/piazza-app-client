import { Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../models/post";

import postsAction from "../postsAction";
import SinglePost from "../singlePost/SinglePost";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector((state: { postsSlice: any }) => ({
    posts: state.postsSlice.posts,
  }));

  useEffect(() => {
    dispatch(postsAction.getAllPosts());
  }, [dispatch]);

  return (
    <Center flexDirection={"column"} mt={20}>
      {posts.posts.map((post: Post) => {
        return (
          <SinglePost
            id={post.id}
            dateOdModification={post.dateOdModification}
            dateOfCreation={post.dateOfCreation}
            image={post.image}
            userId={post.userId}
            content={post.content}
            key={post.id}
            user={post.user}
          />
        );
      })}
    </Center>
  );
}

export default PostsList;
