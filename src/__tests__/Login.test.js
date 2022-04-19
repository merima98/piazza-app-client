import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "../features/login/Login";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
test("Should render Login component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );

  expect(screen.getByRole("button", { name: /Login/i })).toBeDisabled();
});
