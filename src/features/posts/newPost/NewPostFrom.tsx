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

function NewPostForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values: FieldValues) {
    console.log("Values from new form are, ", values);
  }

  return (
    <Flex
      w={"100%"}
      mt={"5rem"}
      mb={2}
      paddingTop={5}
      zIndex={-1}
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
