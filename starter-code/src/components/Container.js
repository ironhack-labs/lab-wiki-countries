import React, { Component } from "react";
import CountryList from "./CountryList";
import Countrydetail from "./Countrydetails";
import { Route } from "react-router-dom";

export default class Container extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <CountryList countries={this.props.countries} />
          <Route path="/:id" component={Countrydetail} />
        </div>
      </div>
    );
  }
}
