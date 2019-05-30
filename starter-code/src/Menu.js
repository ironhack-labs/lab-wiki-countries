import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Menu extends Component {

  render() {
    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.country.flag ? props.country.flag : ""}
          aria-hidden={props.country.flag ? "false" : "true"}
        >
          {props.country.flag}
        </span>
      )
    return (
      <div class="list-group">
        {this.props.countries.map((country)=> 
        <NavLink className={this.props.className} to={`/${country.cca3}`}>{Emoji}{country.name.common}</NavLink>)}
      </div>
    )
  }
}
export default Menu 