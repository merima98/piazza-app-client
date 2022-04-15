import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import postAction from "../postsAction";

function NewPostForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const toast = useToast();

  function onSubmit(values: FieldValues) {
    const userId = Number(window.localStorage.getItem("userId"));

    const data = {
      dateOfModification: new Date(),
      dateOfCreation: new Date(),
      content: values.content,
      userId: userId,
      image: values.image,
    };

    dispatch(postAction.addNewPost(data));
    toast({
      title: `You've added post successfuly!`,
      status: "success",
      isClosable: true,
      position: "top",
    });
    reset();
  }

  return (
    <Flex
      w={"100%"}
      mt={"5rem"}
      mb={2}
      paddingTop={5}
      zIndex={1}
      justifyContent={"center"}
    >
      <Box width={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={3} isInvalid={errors.image}>
            <Input
              placeholder="Image URL"
              {...register("image", {
                required: "Image URL is required fielad!",
              })}
            />
            <FormErrorMessage>
              {errors.image && errors.image.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={3} isInvalid={errors.content}>
            <Input
              placeholder="Content of image."
              {...register("content", {
                required: "Content is required field!",
                minLength: {
                  value: 4,
                  message: "Content must have 4 characters!",
                },
              })}
            />
            <FormErrorMessage>
              {errors.content && errors.content.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            w={"100%"}
            mb={1}
            type="submit"
            colorScheme={"blue"}
            data-test="add-new-post-button"
          >
            Add post
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default NewPostForm;
