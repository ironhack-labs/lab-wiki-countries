import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import CountriesList from './Components/CountriesList/CountriesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route exact path="/:cca3" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
