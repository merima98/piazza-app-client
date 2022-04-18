import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { Provider } from "react-redux";
import Header from "../features/header/Header";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

test("Should render Header component.", () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
});
