import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { format } from "date-fns";
import { Post } from "../../../models/post";

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

  return (
    <Box w={"100%"} mb={2} zIndex={-1} justifyContent={"center"}>
      <Box mb={2} p={10} border={"1px solid"} borderColor={"gray.100"}>
        <Flex flexDirection={"row"}>
          <Text mb={2}>{user.firstName}</Text>
          <Text mb={2}>{user.lastName}</Text>
        </Flex>
        <Image mb={2} src={image} boxSize={"auto"} height={"auto"} />
        <Text mb={2}>{content}</Text>
        <Text>Created {convertDate(dateOfCreation)}</Text>
      </Box>
    </Box>
  );
}

export default SinglePost;
