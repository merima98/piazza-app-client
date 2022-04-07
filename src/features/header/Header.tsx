import { Breadcrumb, BreadcrumbItem, Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navitation = useNavigate();
  let token = window.localStorage.getItem("token");

  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navitation("/posts");
  }

  return (
    <Flex
      zIndex={1}
      backgroundColor={"white"}
      position={"fixed"}
      w={"100%"}
      top={0}
      justifyContent={"center"}
      borderBottom={"1px solid"}
      borderColor={"gray.100"}
      p={3}
    >
      {token ? (
        <Breadcrumb separator={""}>
          <BreadcrumbItem>
            <Link to="/posts">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/posts">New posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/posts">Your posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button onClick={() => logout()}>Logout</Button>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <Breadcrumb separator={""}>
          <BreadcrumbItem>
            <Link to="/posts">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/posts">New posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/login">Login</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Flex>
  );
}

export default Header;
