import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container d-flex p-2">
        <CountriesList />
        <Switch>
          <Route exact path="/">
            <h1>Por favor seleccione un país</h1>
          </Route>
          <Route path="/:id" render={(props) => <CountryDetail {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
