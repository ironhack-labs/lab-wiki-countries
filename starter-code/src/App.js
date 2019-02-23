import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail'
import { Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group list-countries">
                {
                  countries.map((country,i) =>
                    <Link to={`/${country.cca3}`} key={i} className='list-group-item list-group-item-action'>{country.flag} {country.name.common}</Link>
                )
                }
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route path={`/:cca3`} component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
