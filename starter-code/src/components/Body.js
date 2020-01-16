import React, { Component } from "react";
import Countries from "./Countries";
import Detail from "./Detail";
import Data from "../countries.json";
import { Switch, Route } from "react-router-dom";

class Body extends Component {
   

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="list-group col-5">
            <Countries countries={Data} />
          </div>
          <div className="Details col-7">
          <Switch>
            <Route exact path="/:id" component={Detail} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
