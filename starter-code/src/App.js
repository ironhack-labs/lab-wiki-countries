import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">WikiCountries</nav>
      <div className="row">
        <CountryList />
        <Switch>
          <Route exact path="/:country" component={CountryDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
