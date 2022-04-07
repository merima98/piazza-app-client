import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const params = useParams();

  return <Center>Post details component.</Center>;
}

export default PostDetails;
