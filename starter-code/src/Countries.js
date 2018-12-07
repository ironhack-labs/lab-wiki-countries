import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

class Countries extends Component {
  render() {
    return (
      <Link className="list-group-item list-group-item-action" to={this.props.href}>
        {this.props.flag}{this.props.name}
      </Link>
    );
  }
}

export default Countries;