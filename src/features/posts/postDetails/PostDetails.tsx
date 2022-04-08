import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";

import postAction from "../postsAction";
import { format } from "date-fns";

function PostDetails() {
  const params = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const postById = useSelector((state: { postsSlice: any }) => ({
    post: state.postsSlice,
  }));

  useEffect(() => {
    dispatch(postAction.getPostById(Number(params.id)));
  }, [dispatch, params.id]);

  function convertDate(date?: string) {
    if (date) {
      let dateParse = Date.parse(date);
      let value = format(dateParse, "dd.MM.yyyy");
      return value;
    }
  }

  function deletePost() {
    console.log("I deleted post.");
    onClose();
  }
  return (
    <Center mt={"10rem"} flexDirection={"column"} mb={3}>
      <Box p={15} border={"1px solid"} borderColor={"gray.100"}>
        <Box mb={2}>
          {postById.post?.post.user?.firstName}{" "}
          {postById.post?.post.user?.lastName}
        </Box>
        <Box>
          <Image
            mb={2}
            boxSize={"auto"}
            height={"auto"}
            width={"70vw"}
            src={postById.post?.post.image}
          />
        </Box>
        <Box mb={2}>{postById.post?.post.content}</Box>
        <Box fontWeight={"bold"} fontSize={15} mb={2}>
          Created: {convertDate(postById.post?.post.dateOfCreation)}
        </Box>
        <Box fontWeight={"bold"} fontSize={12} mb={2}>
          Modified: {convertDate(postById.post?.post.dateOdModification)}
        </Box>
        <Box>
          <Button colorScheme={"blue"} size={"xs"} mr={2}>
            Edit
          </Button>
          <Button colorScheme={"red"} size={"xs"} onClick={onOpen}>
            Delete post
          </Button>
          <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            leastDestructiveRef={cancelRef}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader>Delete post</AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to delete this post?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={onClose} colorScheme={"blue"} size={"xs"}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => deletePost()}
                    colorScheme={"red"}
                    size={"xs"}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Box>
    </Center>
  );
}

export default PostDetails;
