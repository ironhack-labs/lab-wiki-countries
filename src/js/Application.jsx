import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import List from "./List";
import Details from "./Details";
import Navbar from "./Navbar";
import Search from "./Search";


import countries from "../countries.json";


import "bootstrap/dist/css/bootstrap.css";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countries,
      search: ""
    };

    this._handleSearchChange = this._handleSearchChange.bind(this)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar />
        <div className="content">
        <Search 
        handleSearchChange={this._handleSearchChange}
        search={this.state.search}
        />
          <div className="row">
            <div className="col-5">
              <List
              countries={this.state.countries}
              search={this.state.search}
              />
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
        </div>
      </BrowserRouter>
    );
  }

  _handleSearchChange(event) {
    this.setState({
      search: event.target.value
    })
  }
}

export default Application;
