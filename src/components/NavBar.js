import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-light bg-light">
                  <div className="container-fluid">
                  <span className="navbar-brand mb-0 h1">LAB - WikiCountries</span>
                  </div>
              </nav>  
            </div>
        )
    }
}

export default NavBar