import React, { Component } from "react";

import countries from "../../countries.json";

import Country from "./Country";

import "./CountriesList.css";

import { Switch, Route, Redirect, Link } from "react-router-dom";

class CountriesList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <> 
            {countries.map((elm) => (
              <Link to={"/" + elm.cca3}>
                <Country key={elm.cca3} {...elm} />
              </Link>
            ))}
      </>
    );
  }
}

export default CountriesList;
