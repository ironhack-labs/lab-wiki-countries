import React from 'react';
import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <CountriesList />
        <Switch>
          <Route path="/:cca3" render={props => <CountryDetails {...props}/>}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
