import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">WikiCountries</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
