import React, { Component } from 'react'
import './Country.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Country extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Link to={"/" + this.props.rafa} className="list-group-item list-group-item-action" >
      {this.props.flag} {this.props.name}
      </Link>
    )
  }
}
