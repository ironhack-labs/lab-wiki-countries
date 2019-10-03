import React, { Component } from "react";
import { Link } from "react-router-dom";
import './CountryBox.css'

export default class CountryBox extends Component {
  render() {
    return (
      <li>
        {/* <a href={`/${this.props.cca3}`}>
          {this.props.flag} {this.props.name.common}
        </a> */}
        <Link to={`/${this.props.cca3}`}>{this.props.flag} {this.props.name.common}</Link>
      </li>
    );
  }
}
