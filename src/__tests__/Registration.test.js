import Registration from "../features/registration/Registration";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render Registration component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <Registration />
      </Router>
    </Provider>
  );

  expect(screen.getByRole("button", { name: /Register/i })).toBeEnabled();
});
