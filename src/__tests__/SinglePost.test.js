import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import SinglePost from "../features/posts/singlePost/SinglePost";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render SinglePost component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <SinglePost />
      </Router>
    </Provider>
  );
});
