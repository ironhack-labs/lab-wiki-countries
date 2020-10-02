import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <main className="d-flex justify-content-around container mt-4">
          <CountriesList />

          <Switch>
            <Route exact path="/details/:id" component={CountryDetails} />
          </Switch>
      </main>
    </div>
  );
}

export default App;
