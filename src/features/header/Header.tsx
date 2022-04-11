import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { User, Moon, Sun } from "react-feather";

function Header() {
  const navitation = useNavigate();
  const headerBackground = useColorModeValue("white", "gray.800");
  let token = window.localStorage.getItem("token");
  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navitation("/login");
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      zIndex={2}
      backgroundColor={headerBackground}
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
            <Link to="/new-posts">New posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/my-posts">My posts</Link>
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
          <BreadcrumbItem>
            {colorMode === "dark" ? (
              <Sun height={20} width={20} onClick={toggleColorMode} />
            ) : (
              <Moon height={20} width={20} onClick={toggleColorMode} />
            )}
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
