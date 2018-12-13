import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import { NavLink } from 'react-router-dom'
import countries from './countries.json'

class App extends Component {
  state = {
    countries
  }
  render() {
    const { countries } = this.state
    return (
      <div>
        <div className="row">
          <div className="col-3" style={{ height: '100vh', overflowY: 'scroll' }}>
            <div className="list-group">
              {
                countries.map((country, index) => {
                  const urlName = country.cca3
                  return <NavLink key={index} to={`/country/${urlName}`} activeClassName="active" className="list-group-item list-group-item-action" >{country.name.common}</NavLink>
                })
              }
            </div>
          </div>
          <div className="col-9">
            <Routes />
          </div>
        </div>




      </div>
    );
  }
}

export default App;
