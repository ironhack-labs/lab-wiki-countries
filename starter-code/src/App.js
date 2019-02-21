import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import CountryDetail from './CountryDetail';
import {Link} from 'react-router-dom';
import countries from './countries.json';

class App extends Component {
  render () {
    return (
      <div>
        <div className="list-group-item list-group-item-action active">
          <h2>WikiCountries</h2>
        </div>
              <Switch>
                <Route exact path="/countries/:cca3" component={CountryDetail} />
              </Switch>

        <div className="styling">
          <div>
            {countries.map ((country, idx) => {
              return (
                <p key={idx}>
                    <Link to={`/countries/${country.cca3}`}>
                      {country.flag} {country.name.official}
                    </Link>
                </p>
              );
            })}
            <div className="details">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
