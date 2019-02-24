import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Countries extends Component {

  render() {
    const  { cca3, name, flag } = this.props;
    return (
        <Link className="list-group-item list-group-item-action" to={cca3}>{flag} {name}</Link>
    )
  }
}

export default Countries;
