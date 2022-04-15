import { Box, Text, Flex, Image, Tooltip } from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { Post } from "../../../models/post";

function SinglePost(props: Post) {
  const {
    user,
    dateOfModification,
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

  const navigation = useNavigate();

  function navigateToDetails() {
    navigation(`/post/${id}`);
  }

  return (
    <Box w={"100%"} mb={2} zIndex={-1} justifyContent={"center"} mt={20}>
      <Box mb={2} p={10} border={"1px solid"} borderColor={"gray.100"}>
        <Flex flexDirection={"row"}>
          <Text mb={2}>{user?.firstName}</Text>
          <Text mb={2}>{user?.lastName}</Text>
        </Flex>
        <Tooltip label="Click here to see details.">
          <Image
            mb={2}
            src={image}
            boxSize={"auto"}
            height={"auto"}
            data-test="data-test-post-details-image"
            onClick={() => navigateToDetails()}
          />
        </Tooltip>
        <Text mb={2}>{content}</Text>
        <Text fontWeight={"bold"} fontSize={12}>
          Created {convertDate(dateOfCreation)}
        </Text>
      </Box>
    </Box>
  );
}

export default SinglePost;
