import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

export default class CountryDetail extends Component {
  render() {
    return (
      <div>
        
        <Link to= {this.props.link} className={this.props.className}> <p>{this.props.flag}</p>{this.props.name}</Link>
        
      </div>
    )
  }
}
