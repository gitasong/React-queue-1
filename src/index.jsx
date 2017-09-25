import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import middlewareLogger from './middleware/middleware-logger';
import persistDataLocally from './middleware/persist-local-storage-data';

import App from "./components/App";

let retrievedState;
try {
    retrievedState = localStorage.getItem("reduxStore");
  if (retrievedState === null) {
    retrievedState = [];
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err) {
  retrievedState = [];
}

const store = createStore(reducer, retrievedState, applyMiddleware(middlewareLogger, persistDataLocally));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
      <Component/>
    </HashRouter>
    </Provider>,
    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
