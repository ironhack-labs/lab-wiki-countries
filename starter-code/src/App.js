import React, { Component } from 'react';
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import {Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
              <CountryList />
            </div>
            <div className="col-7">
              <Route path="/country/:id" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
