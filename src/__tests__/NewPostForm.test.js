import { screen, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import NewPostForm from "../features/posts/newPost/NewPostFrom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render NewPostForm component", () => {
  render(
    <Provider store={store}>
      <Router>
        <NewPostForm />
      </Router>
    </Provider>
  );

  expect(screen.getByRole("button", { name: /Add post/i })).toBeDisabled();
});
