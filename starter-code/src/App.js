import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Nav'
// import { NavLink } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container marg-top">
          <CountryDetail />

        </div>
      </React.Fragment>
    )
  }
}

export default App;
