import { Box } from "@chakra-ui/react";

import BigScreensHeader from "./BigScreensHeader";
import SmallScreenDesktop from "./SmallScreensDesktop";

function Header() {
  return (
    <Box>
      <BigScreensHeader />
      <SmallScreenDesktop />
    </Box>
  );
}

export default Header;
