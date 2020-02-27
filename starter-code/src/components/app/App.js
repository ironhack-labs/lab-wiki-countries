import React from 'react';
import './App.css';
import countries from './../../countries.json'
import CountryDetail from './../CountryDetail/CountryDetail'
import { Switch, Route, NavLink } from 'react-router-dom';

function App() {
  let position
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="countriesList">
                <div className="list-group">
                  {countries.map((elem, idx) => <NavLink activeStyle={{}} key={idx} to={"/" + elem.cca3} className="list-group-item list-group-item-action">{elem.flag + elem.name.common}</NavLink>)}
                </div>
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:code" render={match => <CountryDetail {...match} />} />
              </Switch>
              <CountryDetail />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
