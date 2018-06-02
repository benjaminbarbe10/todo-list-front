import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheets/index.css";
import App from "./App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/redux";
//
// ─── RENDER THE APP IN THE INDEX.HTML FILE ────────────────────────────────────
//

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("app")
);
