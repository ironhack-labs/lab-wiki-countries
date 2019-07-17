import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default class CountryItem extends Component {
  render() {
    return (
      <li
        key={this.props.idx}
        className="list-group-item list-group-item-action"
      >
        <Link to={"/viewCountry/" + this.props.countryitem.cca3}>
          {this.props.countryitem.flag}
          {this.props.countryitem.name.common}
        </Link>
      </li>
    );
  }
}
