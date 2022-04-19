import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import NoPosts from "../features/posts/noPosts/NoPosts";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Should test NoPost component.", () => {
  it("Should render NoPosts component.", () => {
    render(
      <Provider store={store}>
        <Router>
          <NoPosts />
        </Router>
      </Provider>
    );
  });

  it("Should contain No posts yet!", () => {
    render(
      <Provider store={store}>
        <Router>
          <NoPosts />
        </Router>
      </Provider>
    );
    expect(screen.getByText("No posts yet!")).toBeInTheDocument();
  });

  it("Should contain Add new post.", () => {
    render(
      <Provider store={store}>
        <Router>
          <NoPosts />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Add new post.")).toBeInTheDocument();
  });
});
