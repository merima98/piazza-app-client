import { screen, render, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import NewPostForm from "../features/posts/newPost/NewPostFrom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Should test NewPostForm component.", () => {
  it("Should render NewPostForm component", () => {
    render(
      <Provider store={store}>
        <Router>
          <NewPostForm />
        </Router>
      </Provider>
    );
    expect(screen.getByRole("button", { name: /Add post/i })).toBeDisabled();
  });

  it("Add post button becomes enabled after entering values in input fields.", async () => {
    render(
      <Provider store={store}>
        <Router>
          <NewPostForm />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      userEvent.type(
        screen.getByPlaceholderText(/Content of image./i),
        "My test image"
      );

      userEvent.type(
        screen.getByPlaceholderText(/Image URL/i),
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      );
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Add post/i })).toBeEnabled();
    });
  });
});
