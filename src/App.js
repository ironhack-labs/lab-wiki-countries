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
      <div className="d-flex">
        <main className="container mt-4">
          <CountriesList />
        </main>

        <section>
          <Switch>
            <Route exact path="/details/:id" component={CountryDetails} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
