import { Center } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

function PostsList() {
  const dispatch = useDispatch();

  return <Center flexDirection={"column"}>This is Posts List</Center>;
}

export default PostsList;
