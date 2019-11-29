import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Selector from "./Component/Selector";
import Details from "./Component/Details";
import { Route } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                <Selector />
              </div>
            </div>
            <Route exact path="/:id" component={Details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// <span role="img" aria-label="sheep">🐑</span>
