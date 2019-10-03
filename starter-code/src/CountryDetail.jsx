import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    return (
      <NavLink to={this.props.href}
      activeClassName="active"
      className="list-group-item list-group-item-action">
        {this.props.flag}
        {this.props.children}
      </NavLink>
    )
  }
}
