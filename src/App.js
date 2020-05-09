import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Route, Link, Switch } from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';


function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                <CountriesList />
              </div>
            </div>
            <div className="col-7">
              {/* <Route exact path='/:cca3' component={CountryDetail} /> */}
              <Route exact path="/:cca3">
                {(props) => <CountryDetail {...props} countries={countries} />}
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
