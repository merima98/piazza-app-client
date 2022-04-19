import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import SmallScreenDesktop from "../features/header/SmallScreensDesktop";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render SmallScreenDesktop component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <SmallScreenDesktop />
      </Router>
    </Provider>
  );
  expect(screen.getByRole("button", { name: /Piazza/i })).toBeEnabled();
});

test("Should have enabled links.", () => {
  render(
    <Provider store={store}>
      <Router>
        <SmallScreenDesktop />
      </Router>
    </Provider>
  );
  expect(screen.getByText("New posts").closest("a")).toBeInTheDocument();
  expect(screen.getByText("Home").closest("a")).toBeInTheDocument();
  expect(screen.getByText("Login").closest("a")).toBeInTheDocument();
});
