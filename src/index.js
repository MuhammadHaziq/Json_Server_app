import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import LoginForm from "./component/layouts/LoginLayout.js";
import MaterialForm from "./component/layouts/Login.js";
import MainLayout from "./component/layouts/MainLayout.js";
import Store from "./store/Store.js";
import Routes from "./route/Routes.js";
import User from "./container/User.js";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
