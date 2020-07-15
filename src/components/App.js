import React from 'react';
import './App.css';
import CountriesList from './Countries/CountriesList'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <main>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <CountriesList />
    </main>
  );
}

export default App;
