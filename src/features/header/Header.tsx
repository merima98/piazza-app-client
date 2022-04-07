import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "react-feather";

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
      zIndex={2}
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
            <Menu>
              <MenuButton>
                <User height={20} width={20} />
              </MenuButton>
              <MenuList>
                <MenuItem>Your profile</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
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
