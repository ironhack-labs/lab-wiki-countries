import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Route, Switch, Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {countries}
  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="list-group">
            {this.state.countries.map((country, idx) => {
              return (
                <Link
                  key={idx}
                  to={`/${country.cca3}`}>
                  {country.flag}{country.name.common}
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
