import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList/>
          <Switch>
            <Route exact path="/:id" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
