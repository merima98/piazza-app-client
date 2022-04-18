import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./features/header/Header";
import loginAction from "./features/login/loginAction";
import registrationAction from "./features/registration/registrationAction";
import { LOGGED_IN_USER_ROUTES, LOGGED_OUT_ROUTES } from "./routing/routes";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  const login = useSelector((state: { loginSlice: any }) => ({
    login: state.loginSlice,
  }));

  const registration = useSelector((state: { registrationSlice: any }) => ({
    registration: state.registrationSlice,
  }));
  useEffect(() => {
    dispatch(loginAction.isLogin());
    dispatch(registrationAction.isRegisteredUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <div>
        <Header />
        {(login.login.isLoggedIn || registration.registration.isLoggedIn) && (
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
        {(!login.login.isLoggedIn || !registration.registration.isLoggedIn) && (
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
