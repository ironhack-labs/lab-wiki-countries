import React, { Component } from 'react'
import Description from './components/Description'
import './App.css'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <Description />
      </div>
    )
  }
}

export default App
