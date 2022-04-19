import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import BigScreensHeader from "../features/header/BigScreensHeader";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render BigScreensHeader component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <BigScreensHeader />
      </Router>
    </Provider>
  );
});

test("Should have New posts link.", () => {
  render(
    <Provider store={store}>
      <Router>
        <BigScreensHeader />
      </Router>
    </Provider>
  );
  expect(screen.getByText("New posts").closest("a")).toBeInTheDocument();
  expect(screen.getByText("Home").closest("a")).toBeInTheDocument();
});
