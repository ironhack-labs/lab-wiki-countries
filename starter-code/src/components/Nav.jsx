import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <ul>
          <Link to="/">
          <li><h1 className="text-white ml-5">WikiCountries</h1> </li>
          </Link>
          <Link to="/country-details">
          <li></li>
          </Link>
        </ul>
      </nav>

      </div>
    )
  }
}

export default Nav
