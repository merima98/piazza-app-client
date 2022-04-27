import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Header from "./features/header/Header";
import authAction from "./features/auth/authAction";
import { LOGGED_IN_USER_ROUTES, LOGGED_OUT_ROUTES } from "./routing/routes";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  const auth = useSelector((state: { authSlice: any }) => ({
    auth: state.authSlice,
  }));

  useEffect(() => {
    dispatch(authAction.isAuthenticated());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <div>
        <Header />
        {auth.auth.isLoggedIn && (
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
        {!auth.auth.isLoggedIn && (
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
      </div>
    </ChakraProvider>
  );
}

export default App;
