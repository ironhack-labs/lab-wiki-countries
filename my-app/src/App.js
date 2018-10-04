import React, { Component } from "react";
import Navbar from "./Navbar";
import Countries from "./Countries";
import List from "./List.js"
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row" />
          <div className="col-5">
            <div className="pre-scrollable">
              <Switch>
                <Route exact path="/" component={Countries} />
                <Route path="/countries" component={Countries} />
                <Route path="/countries/:id" component={List} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
