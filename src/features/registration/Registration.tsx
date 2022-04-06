import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Registration() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values: any) {
    // will be added type
    console.log("Values are, ", values);
  }

  return (
    <Center mt={60} flexDirection={"column"}>
      <Box mb={5}>PIAZZA</Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={5}>
            <FormControl mb={3} isInvalid={errors.firstName}>
              <Input
                placeholder="First name"
                {...register("firstName", {
                  required: "First name is required field!",
                  minLength: {
                    value: 4,
                    message: "First name must have 4 characters!",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={3} isInvalid={errors.lastName}>
              <Input
                placeholder="Last name"
                {...register("lastName", {
                  required: "Last name is required field!",
                  minLength: {
                    value: 4,
                    message: "Last name must have 4 characters!",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
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
          <Button w={"100%"} type="submit" colorScheme={"blue"} mb={1}>
            Register
          </Button>
        </form>
      </Box>
      <Box display={"flex"}>
        <Text mr={1}>Already have account?</Text>
        <Text color={"blue.500"}>
          <Link to={"/login"}>Login</Link>
        </Text>
      </Box>
    </Center>
  );
}

export default Registration;
