import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:cca3" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
