import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { CountryDetails } from './components/CountryDetails';
import { CountriesList } from './components/CountriesList';

function App() {
  return (
    <div>
      <Navbar />
      <div className="countriesStyle">
        <CountriesList />
        <Switch>
          <Route
            path="/:code"
            render={(props) => <CountryDetails {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
