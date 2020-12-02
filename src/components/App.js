import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className='container'>
          <div className='row'>
            <CountriesList />
          </div>
          <Switch>
            <Route path="/:cca3" render={props => <CountryDetails {...props} />} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
