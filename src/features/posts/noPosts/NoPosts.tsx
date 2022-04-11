import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NoPosts() {
  const linkColor = useColorModeValue("blue", "orange");

  return (
    <Center mt={"5rem"}>
      <Box p={5} border={"1px solid"} borderColor={"gray.100"} w={"80%"}>
        <Text>No posts yet!</Text>
        <Text color={linkColor}>
          <Link to={"/posts"}>Add new post.</Link>
        </Text>
      </Box>
    </Center>
  );
}

export default NoPosts;
