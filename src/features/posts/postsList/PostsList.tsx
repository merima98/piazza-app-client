import { Container, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post, PostSlice } from "../../../models/post";
import NewPostForm from "../newPost/NewPostFrom";
import postsAction from "../postsAction";
import SinglePost from "../singlePost/SinglePost";

function PostsList() {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("token");

  const posts = useSelector((state: { postsSlice: PostSlice }) => ({
    posts: state.postsSlice.posts,
  }));

  useEffect(() => {
    dispatch(postsAction.getAllPosts());
  }, [dispatch]);

  return (
    <Container>
      {token && (
        <Flex>
          <NewPostForm />
        </Flex>
      )}

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

export default PostsList;
