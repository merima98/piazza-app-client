import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./features/header/Header";
import { ROUTES } from "./routing/routes";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <BrowserRouter>
        <Header />
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
