import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useForm, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import loginAction from "./loginAction";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShowState = () => {
    setShow(!show);
  };

  function onSubmit(values: FieldValues) {
    dispatch(loginAction.loginUser(values));
    navigate("/");
  }

  return (
    <Center mt={60} flexDirection={"column"}>
      <Box
        border={"1px solid"}
        borderColor={"gray.100"}
        p={5}
        textAlign={"center"}
      >
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
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required field!",
                      minLength: {
                        value: 4,
                        message: "Password must have 4 characters!",
                      },
                    })}
                  />
                  <InputRightElement>
                    <Button onClick={handleShowState} colorScheme={"blue"}>
                      {show ? <EyeOff /> : <Eye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Button w={"100%"} mb={1} type="submit" colorScheme={"blue"}>
              Login
            </Button>
          </form>
        </Box>
        <Box display={"flex"}>
          <Text mr={1}>Do not have an account?</Text>
          <Text color={"blue.500"}>
            <Link to={"/"}>Register</Link>
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default Login;
