import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "../features/login/Login";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";
import rootReducer from "../reducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Should test Login component.", () => {
  it("Should render Login component.", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(screen.getByRole("button", { name: /Login/i })).toBeDisabled();
  });

  it("Login button becomes enabled on entering values into placeholders.", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      userEvent.type(screen.getByPlaceholderText(/Email/i), "test@gmail.com");
      userEvent.type(screen.getByPlaceholderText(/Password/i), "testing123");
    });
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Login/i })).toBeEnabled();
    });
  });
});
