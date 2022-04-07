import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../models/post";

import userActions from "../../user/userAction";

function SinglePost(props: Post) {
  const {
    user,
    dateOdModification,
    dateOfCreation,
    id,
    userId,
    content,
    image,
  } = props;

  function convertDate(date?: string) {
    if (date) {
      let dateParse = Date.parse(date);
      let value = format(dateParse, "dd.MM.yyyy");
      return value;
    }
  }

  const dispatch = useDispatch();
  const users = useSelector((state: { userSlice: any }) => ({
    user: state.userSlice,
  }));

  useEffect(() => {
    dispatch(userActions.getUserById(userId));
  }, [dispatch]);

  return (
    <Box w={"100%"} mb={2} zIndex={-1} justifyContent={"center"}>
      <Box mb={2} p={10} border={"1px solid"} borderColor={"gray.100"}>
        <Flex flexDirection={"row"}>
          <Text mb={2}>{users.user.user[0]?.firstName}</Text>
          <Text mb={2}>{users.user.user[0]?.lastName}</Text>
        </Flex>
        <Image mb={2} src={image} boxSize={"auto"} height={"auto"} />
        <Text mb={2}>{content}</Text>
        <Text>Created {convertDate(dateOfCreation)}</Text>
      </Box>
    </Box>
  );
}

export default SinglePost;
