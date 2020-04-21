import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div uk-dropdown>
        <ul className="uk-nav uk-dropdown-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-header">Header</li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-divider" />
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
