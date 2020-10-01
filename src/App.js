import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
           <Navbar />
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
