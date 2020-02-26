import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail'
// import { Navbar } from 'react-bootstrap/Nav'
import { Switch, Route, Redirect } from 'react-router-dom'
import Details from './components/Details'

function App() {
  return (
    <>
      <div className="container">
        <h1>Hola tios</h1>
        <div className="row">
          <div className="col-md-6">
            <CountryDetail />
          </div>

          <div className="col-md-6">
            <Route path="/details/:cca3" render={match => <Details {...match} />} />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
