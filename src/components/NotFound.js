import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {

    render() {
        return (
              <div className="container">
                <Link to='/' className="navbar-brand">Not found</Link>
              </div>
        )
    }
}
