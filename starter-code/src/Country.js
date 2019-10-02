import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

export default class Country extends Component {
  render() {
    return (
      <div>
        <Link
          className="list-group-item list-group-item-action"
          to={this.props.cca3}
        >
          {this.props.flag}
          {this.props.name.common}
        </Link>
      </div>
    );
  }
}
