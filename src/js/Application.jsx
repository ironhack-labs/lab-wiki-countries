import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import List from "./List";
import Details from "./Details";
import countries from "../countries.json";

import "bootstrap/dist/css/bootstrap.css";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="row">
            <div className="col-5">
              <List countries={this.state.countries} />
            </div>
            <div className="col-7">
            <Switch>
            <Route exact path="/:id" render={() => {
                return <Details countries={this.state.countries} />
            }} />
            </Switch>
            </div> 
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Application;
