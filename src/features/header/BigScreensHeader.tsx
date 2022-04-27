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
import { useDispatch, useSelector } from "react-redux";
import { User, Moon, Sun } from "react-feather";
import { useEffect } from "react";

import authAction from "../auth/authAction";

function BigScreensHeader() {
  const navitation = useNavigate();
  const dispatch = useDispatch();
  const headerBackground = useColorModeValue("white", "gray.800");
  function logout() {
    dispatch(authAction.logOut());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navitation("/login");
  }

  const auth = useSelector((state: { authSlice: any }) => ({
    auth: state.authSlice,
  }));

  useEffect(() => {
    dispatch(authAction.isAuthenticated());
  }, [dispatch]);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      display={{ base: "none", md: "block" }}
      zIndex={2}
      backgroundColor={headerBackground}
      position={"fixed"}
      w={"100%"}
      top={0}
      textAlign={"center"}
      borderBottom={"1px solid"}
      borderColor={"gray.100"}
      p={3}
    >
      {auth.auth.isLoggedIn ? (
        <Breadcrumb separator={""}>
          <BreadcrumbItem>
            <Link to="/posts">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/new-posts" data-test="data-test-new-posts">
              New posts
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/my-posts">My posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Menu>
              <MenuButton>
                <User
                  id="userIcon"
                  data-test="data-test-user-icon"
                  height={20}
                  width={20}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/your-profile" data-test="data-test-your-profile">
                    Your profile
                  </Link>
                </MenuItem>
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
            <Link to="/new-posts">New posts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/login">Login</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Flex>
  );
}

export default BigScreensHeader;
