import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
class Menu extends Component {

  render() {
    return (
      <div>
        {this.props.countries.map((country)=> 
        <Link className={this.props.className} to={`/${country.cca3}`}>{country.flag}{country.name.common}</Link>)}
      </div>
    )
  }
}
export default Menu