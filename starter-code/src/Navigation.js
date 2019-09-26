import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            WikiCountries
          </Link>
        </div>
      </nav>
    )
  }
}
