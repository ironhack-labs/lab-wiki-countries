import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route path="/:cca3" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
