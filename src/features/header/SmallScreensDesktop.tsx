import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDown, Moon, Sun } from "react-feather";
import { useNavigate } from "react-router-dom";

function SmallScreenDesktop() {
  const navitation = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  let token = window.localStorage.getItem("token");
  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navitation("/login");
  }

  return (
    <Flex display={{ base: "block", md: "none" }}>
      {token ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDown />}>
            Piazza
          </MenuButton>
          <MenuList zIndex={3}>
            <MenuItem>Home</MenuItem>
            <MenuItem>New posts</MenuItem>
            <MenuItem>My posts</MenuItem>
            <MenuItem>Your profile</MenuItem>
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
            <MenuItem>Home</MenuItem>
            <MenuItem>New posts</MenuItem>
            <MenuItem>Log out</MenuItem>
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
