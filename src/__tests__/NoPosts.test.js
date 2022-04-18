import { render } from "@testing-library/react";
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

test("Should render NoPosts component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <NoPosts />
      </Router>
    </Provider>
  );
});
