import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values: FieldValues) {
    console.log("Values from login form are:, ", values);
  }

  return (
    <Center mt={60} flexDirection={"column"}>
      <Box mb={5}>PIAZZA</Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={5}>
            <FormControl mb={3} isInvalid={errors.email}>
              <Input
                placeholder="Email"
                type={"email"}
                {...register("email", {
                  required: "Email is required!",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.password}>
              <Input
                placeholder="Password"
                type={"password"}
                {...register("password", {
                  required: "Password is required field!",
                  minLength: {
                    value: 4,
                    message: "Password must have 4 characters!",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Button w={"100%"} mb={1} type="submit" colorScheme={"blue"}>
            Register
          </Button>
        </form>
      </Box>
      <Box display={"flex"}>
        <Text mr={1}>Do not have an account?</Text>
        <Text color={"blue.500"}>
          <Link to={"/"}>Register</Link>
        </Text>
      </Box>
    </Center>
  );
}

export default Login;
