import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./features/header/Header";
import { isLogin } from "./features/login/loginAction";
import { LOGGED_IN_USER_ROUTES, LOGGED_OUT_ROUTES } from "./routing/routes";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    dispatch(isLogin());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <BrowserRouter>
        <Header />
        {token && (
          <Routes>
            {LOGGED_IN_USER_ROUTES.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              );
            })}
          </Routes>
        )}
        {!token && (
          <Routes>
            {LOGGED_OUT_ROUTES.map((item) => {
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<item.element />}
                />
              );
            })}
          </Routes>
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
