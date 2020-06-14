import React from 'react';
import './App.css';
import LaenderListe from './components/LaenderListe';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <Switch>
          <Route  exact path="/countries" component={LaenderListe} />
          <Route   path="/countries/" component={LaenderListe} />

        </Switch>



    </div>
  </div>
    </div>
  );
}

export default App;
