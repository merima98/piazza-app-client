import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import postAction from "../postsAction";

function NewPostForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  function onSubmit(values: FieldValues) {
    const userId = Number(window.localStorage.getItem("userId"));
    const data = {
      dateOdModification: "2022-12-12T18:25:43.511Z",
      dateOfCreation: "2022-12-23T18:25:43.511Z",
      content: values.content,
      userId: userId,
      image: values.image,
    };
    dispatch(postAction.addNewPost(data));
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
          <Button w={"100%"} mb={1} type="submit" colorScheme={"blue"}>
            Add post
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default NewPostForm;
