import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:id" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
