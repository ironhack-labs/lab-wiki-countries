import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail/CountryDetail.js';
import CountriesList from './Components/CountriesList/CountriesList';
import countries from './countries.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CountriesList countries={countries} />
        <Switch>
          <Route
            exact
            path="/country/:id"
            render={props => <CountryDetail {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
