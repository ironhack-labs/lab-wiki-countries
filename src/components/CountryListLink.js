import React, { Component } from "react";
import countries from "../countries.json";
import { Link, NavLink } from 'react-router-dom';

export default class CountryListLink extends Component {
  constructor({cca3}){
    super();
    let {flag, name: {common}} = countries.filter(e => e.cca3.includes(cca3))[0];
    this.state = {
      countryId: cca3,
      name: common,
      flag
    }
  }

  render() {
    return (
      <NavLink to={`/${this.state.countryId}`} activeClassName="is-active has-background-info has-text-white" className="panel-block">
          <span class="panel-icon">
            {this.state.flag}
          </span>
          {this.state.name}
      </NavLink>
        // <a href={`/${this.state.countryId}`} className="panel-block">
        // </a>
    );
  }
}
