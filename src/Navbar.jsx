import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Wiki Countries</Link>
      </div>
    )
  }
}
