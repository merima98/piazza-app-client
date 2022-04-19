import {
  Button,
  Center,
  Text,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerCloseButton,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import userAction from "../userAction";
import { UserSlice } from "../../../models/user";

function UserProfile() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  let userId = window.localStorage.getItem("userId");

  const user = useSelector((state: { userSlice: UserSlice }) => ({
    user: state.userSlice,
  }));

  useEffect(() => {
    dispatch(userAction.getUserById(Number(userId)));
  }, [dispatch]);

  function onSubmit(formValues: FieldValues) {
    const data = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      password: user.user.user[0]?.password,
      email: user.user.user[0]?.email,
    };
    dispatch(userAction.updateUser(Number(userId), data));
    onClose();
    toast({
      title: "User profile updated",
      description: "You have updated profile data successfully!",
      status: "success",
      position: "top",
      isClosable: true,
    });
    navigation("/posts");
  }

  return (
    <Center mt={"5rem"}>
      <Box
        flexDirection={"column"}
        p={5}
        border={"1px solid"}
        borderColor={"gray.100"}
        w={"80%"}
      >
        <Text fontSize={12} fontWeight={"bold"} mb={2}>
          First name
        </Text>
        <Text mb={2}>{user.user.user[0]?.firstName}</Text>
        <Text fontSize={12} fontWeight={"bold"} mb={2}>
          Last name
        </Text>
        <Text mb={2}>{user.user.user[0]?.lastName}</Text>
        <Button
          colorScheme={"blue"}
          size={"xs"}
          mb={2}
          onClick={onOpen}
          data-test="data-test-edit-profile-data-butoon"
        >
          Edit profile data
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Edit profile data</DrawerHeader>
              <DrawerBody>
                <FormControl isInvalid={errors.firstName}>
                  <Input
                    placeholder="First name"
                    mb={2}
                    {...register("firstName", {
                      required: "First name is required field!",
                      minLength: {
                        value: 4,
                        message: "First name must have 4 characters!",
                      },
                    })}
                  />
                  <FormErrorMessage mb={2}>
                    {errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.lastName}>
                  <Input
                    mb={2}
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "Last name is required field!",
                      minLength: {
                        value: 4,
                        message: "Last name must have 4 characters!",
                      },
                    })}
                  />

                  <FormErrorMessage mb={2}>
                    {errors.lastName && errors.lastName.message}
                  </FormErrorMessage>
                </FormControl>
              </DrawerBody>
              <DrawerFooter>
                <Button colorScheme={"blue"} size={"xs"} mr={2}>
                  Cancel
                </Button>
                <Button
                  colorScheme={"green"}
                  size={"xs"}
                  type="submit"
                  disabled={!isValid}
                >
                  {" "}
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </form>
        </Drawer>
      </Box>
    </Center>
  );
}

export default UserProfile;
