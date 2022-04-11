import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
  Box,
  Button,
  Center,
  useToast,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import React from "react";
import { format } from "date-fns";

import postAction from "../postsAction";

function PostDetails() {
  const params = useParams();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
    dispatch(postAction.detetePostBId(Number(params.id)));
    onClose();
    toast({
      title: "Post deleted",
      description: "You deleted post successfully!",
      status: "success",
      position: "top",
      isClosable: true,
    });
    navigation("/posts");
  }

  function onSubmit(values: FieldValues) {
    const data = {
      dateOfModification: new Date(),
      dateOfCreation: postById.post?.post.dateOfCreation,
      content: values.content,
      userId: postById.post?.post.userId,
      image: values.image,
    };
    dispatch(postAction.updatePostById(Number(params.id), data));
    setIsDrawerOpen(false);
    toast({
      title: "Post updated!",
      description: "You updated post successfully!",
      status: "success",
      position: "top",
      isClosable: true,
    });
    navigation("/posts");
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
          Modified: {convertDate(postById.post?.post.dateOfModification)}
        </Box>
        <Box>
          <Button
            colorScheme={"blue"}
            size={"xs"}
            mr={2}
            onClick={() => setIsDrawerOpen(true)}
          >
            Edit
          </Button>
          <Drawer
            isOpen={isDrawerOpen}
            placement="right"
            onClose={() => setIsDrawerOpen(false)}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <form onSubmit={handleSubmit(onSubmit)}>
                <DrawerHeader>Edit post</DrawerHeader>
                <DrawerBody>
                  <FormControl isInvalid={errors.image}>
                    <Input
                      placeholder="Image URL"
                      {...register("image", {
                        required: "Image URL is required fielad!",
                      })}
                      mb={2}
                    />
                    <FormErrorMessage mb={2}>
                      {errors.image && errors.image.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.content}>
                    <Input
                      placeholder="Content of image."
                      {...register("content", {
                        required: "Content is required field!",
                        minLength: {
                          value: 4,
                          message: "Content must have 4 characters!",
                        },
                      })}
                      mb={2}
                    />
                    <FormErrorMessage mb={2}>
                      {errors.content && errors.content.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Text fontWeight={"bold"} fontSize={12}>
                    Last modified:{" "}
                    {convertDate(postById.post?.post.dateOfModification)}
                  </Text>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    variant="outline"
                    mr={3}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Cancel changes
                  </Button>
                  <Button colorScheme="blue" type="submit">
                    Save changes
                  </Button>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
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
                  <Button
                    onClick={onClose}
                    colorScheme={"blue"}
                    size={"xs"}
                    mr={2}
                  >
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
