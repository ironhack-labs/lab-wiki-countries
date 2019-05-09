import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ListOfCountries from './components/ListOfCountries';
import CountryCard from './components/CountryCard';

import './App.css';
import countries from './countries.json';

class App extends Component {
  render() {
    return (
      <>
        <header className="container">
          <h1>WikiCountries</h1>
        </header>
        <main className="container">
          <section className="row">
            <article className="col-4">
              <ListOfCountries countries={countries} />
            </article>
            <article className="col-6">
              <Route path="/country/:id" component={CountryCard} />
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default App;
