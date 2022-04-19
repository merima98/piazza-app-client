import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import UserProfile from "../features/user/userProfile/UserProfile";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Should test UserProfile component.", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfile />
        </Router>
      </Provider>
    );
  });
  it("Should render UserProfile component.", () => {
    expect(
      screen.getByRole("button", { name: /Edit profile data/i })
    ).toBeEnabled();
  });
});
