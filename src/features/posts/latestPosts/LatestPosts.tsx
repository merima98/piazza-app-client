import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post, PostSlice } from "../../../models/post";
import postActions from "../postsAction";
import SinglePost from "../singlePost/SinglePost";

function LatestPosts() {
  const posts = useSelector((state: { postsSlice: PostSlice }) => ({
    posts: state.postsSlice.posts,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postActions.getNewPosts());
  }, [dispatch]);
  return (
    <Container>
      {posts.posts.map((post: Post) => {
        return (
          <SinglePost
            id={post.id}
            dateOfModification={post.dateOfModification}
            dateOfCreation={post.dateOfCreation}
            image={post.image}
            userId={post.userId}
            content={post.content}
            key={post.id}
            user={post.user}
          />
        );
      })}
    </Container>
  );
}

export default LatestPosts;
