import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    constructor() {
        super()
        this.state = {}
    }


    render() {

        return (
            <Fragment>
                <nav className="navbar navbar-light">
                    <Link to="/" >IronCountries</Link>
                </nav>
            </Fragment>

        )
    }
}

export default NavBar