import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import {NavLink} from 'react-router-dom'
import countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3" style={{
            height:'100vh',
            overflowY:'scroll'
          }}>
            <div className="list-group">
              {countries.map(c=><NavLink key={c.cca3} activeClassName="active" className="list-group-item list-group-item-action" to={`/country/${c.cca3}`}>{c.name.common}</NavLink>)}
            </div>
          </div>
          <div className="col-9">
            <Routes/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
