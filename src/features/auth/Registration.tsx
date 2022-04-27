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
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import registrationAction from "./authAction";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";

function Registration() {
  const [show, setShow] = useState(false);
  const handleShowState = () => {
    setShow(!show);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onSubmit(values: FieldValues) {
    dispatch(registrationAction.registeUser(values));
    navigate("/posts");
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
              <FormControl mb={3} isInvalid={errors.firstName}>
                <Input
                  placeholder="First name"
                  id="firstName"
                  autoComplete="firstName"
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
                  id="lastName"
                  autoComplete="lastName"
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
                  id="email"
                  autoComplete="email"
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
                    id="password"
                    autoComplete="password"
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
            <Button
              w={"100%"}
              type="submit"
              colorScheme={"blue"}
              data-test="register-button"
              mb={1}
              disabled={!isValid}
              cy-test="cy-register-button"
            >
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
      </Box>
    </Center>
  );
}

export default Registration;
