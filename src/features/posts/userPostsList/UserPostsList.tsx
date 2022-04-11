import { Container, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../models/post";
import NoPosts from "../noPosts/NoPosts";

import postAction from "../postsAction";
import SinglePost from "../singlePost/SinglePost";

function UserPostsList() {
  const dispatch = useDispatch();
  let userId = window.localStorage.getItem("userId");

  const posts = useSelector((state: { postsSlice: any }) => ({
    posts: state.postsSlice.posts,
  }));

  useEffect(() => {
    dispatch(postAction.getUsersPost(Number(userId)));
  }, [dispatch]);

  return (
    <Container>
      {posts.posts.length === 0 ? (
        <NoPosts />
      ) : (
        <Box>
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
        </Box>
      )}
    </Container>
  );
}

export default UserPostsList;
