import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ElementCountry extends Component {
  render() {
    return (
      <Link to={`/` + this.props.cca3}
        className="list-group-item list-group-item-action">
        {this.props.flag} {this.props.name.common}</Link>
    );
  }
}