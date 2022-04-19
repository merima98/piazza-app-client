import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";

import PostDetails from "../features/posts/postDetails/PostDetails";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render PostDetails component.", async () => {
  render(
    <Provider store={store}>
      <Router>
        <PostDetails />
      </Router>
    </Provider>
  );
  expect(screen.getByRole("button", { name: /Edit/i })).toBeEnabled();
  expect(screen.getByRole("button", { name: /Delete/i })).toBeEnabled();
  const myButton = screen.getByRole("button", { name: /Edit/i });
  await fireEvent.click(myButton);
  expect(screen.getByRole("button", { name: /Save changes/i })).toBeEnabled();
  expect(screen.getByRole("button", { name: /Cancel changes/i })).toBeEnabled();
});
