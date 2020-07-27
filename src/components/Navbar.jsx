import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">WikiCountries</Link>
            </nav>
        )
    }
}

export default Navbar
