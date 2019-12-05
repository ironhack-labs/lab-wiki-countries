import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Detail from "./Detail";
import LeftBar from "./LeftBar";

import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<App />, document.getElementById("root1"));

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={LeftBar} />
    <Route path="/:i" component={Detail} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
