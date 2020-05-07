import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import countries from './countries.json';
import { Route, Switch, Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {
    countries: countries,
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="row">
          <div class="list-group">
            {this.state.countries.map((country, i) => {
              return (
                <Link
                  key={i}
                  to={`/${country.cca3}`}
                  className="list-group-item list-group-item-action"
                >
                  {country.flag}
                  {country.name.common}
                </Link>
              );
            })}
          </div>
          <Switch>
            <Route exact path="/:id" component={CountryDetail}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
