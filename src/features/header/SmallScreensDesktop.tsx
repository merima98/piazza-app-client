import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ChevronDown, Moon, Sun } from "react-feather";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import authAction from "../auth/authAction";

function SmallScreenDesktop() {
  const dispatch = useDispatch();
  const navitation = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
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

  return (
    <Flex display={{ base: "block", md: "none" }}>
      {auth.auth.isLoggedIn ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDown />}>
            Piazza
          </MenuButton>
          <MenuList zIndex={3}>
            <MenuItem>
              <Link to="/posts">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/new-posts">New posts</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/my-posts">My posts</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/your-profile">Your profile</Link>
            </MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
            <MenuItem>
              {colorMode === "dark" ? (
                <Sun height={20} width={20} onClick={toggleColorMode} />
              ) : (
                <Moon height={20} width={20} onClick={toggleColorMode} />
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDown />}>
            Piazza
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/posts">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/new-posts">New posts</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem>
              {colorMode === "dark" ? (
                <Sun height={20} width={20} onClick={toggleColorMode} />
              ) : (
                <Moon height={20} width={20} onClick={toggleColorMode} />
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
export default SmallScreenDesktop;
