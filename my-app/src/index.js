import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { WikiCountry } from "./WikiCountry";

class App extends React.Component {
  render() {
    return <div>{/* Your application code */}</div>;
  }
}

ReactDOM.render(
  <div>
    <h1>IronWiki Country Information</h1>
    <BrowserRouter>
      <WikiCountry />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
