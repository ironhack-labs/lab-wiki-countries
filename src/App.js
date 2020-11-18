import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="body">
          <CountriesList />
          <Route path="/:country" component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
