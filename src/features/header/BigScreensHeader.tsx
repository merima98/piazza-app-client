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
import loginAction from "../login/loginAction";

function BigScreensHeader() {
  const navitation = useNavigate();
  const dispatch = useDispatch();
  const headerBackground = useColorModeValue("white", "gray.800");
  let token = window.localStorage.getItem("token");
  function logout() {
    dispatch(loginAction.logOut());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navitation("/login");
  }

  const login = useSelector((state: { loginSlice: any }) => ({
    login: state.loginSlice,
  }));

  useEffect(() => {
    dispatch(loginAction.isLogin());
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
      {login.login.isLoggedIn ? (
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
                <MenuItem>
                  <Link to="/your-profile">Your profile</Link>
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
