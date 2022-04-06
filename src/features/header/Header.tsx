import { Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex
      position={"fixed"}
      w={"100%"}
      top={0}
      justifyContent={"center"}
      borderBottom={"1px solid"}
      borderColor={"gray.100"}
      p={3}
    >
      <Breadcrumb separator={""}>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/posts">New posts</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/posts">Your posts</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/login">Login</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}

export default Header;
