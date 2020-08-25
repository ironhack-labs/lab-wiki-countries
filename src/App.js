import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container d-flex p-2">
        <CountriesList />
        <Switch>
          <Route exact path="/">
            <h1>Select a country </h1>
          </Route>
          <Route path="/:id" render={(props) => <CountryDetail {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;