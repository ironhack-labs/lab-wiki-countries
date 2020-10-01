import React from 'react';
import Navbar from '../components/layout/Navbar'
import CountriesList from './pages/CountriesList'
import CountryDetails from './pages/CountryDetails'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App';

function App() {
  return (
    <>
      <Navbar />
      <CountriesList />
      <Switch>
        <Route path="/:id" render={props => <CountryDetails {...props} />} />
      </Switch>
    </>
  );
}

export default App;
