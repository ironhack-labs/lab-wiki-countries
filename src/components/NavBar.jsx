import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                    <a class="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;