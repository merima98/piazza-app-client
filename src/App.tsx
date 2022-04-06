import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./routing/routes";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <BrowserRouter>
        <Routes>
          {ROUTES.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
