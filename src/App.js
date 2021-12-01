import logo from './logo.svg';
import './App.css';

import React from 'react';

import CountriesList from './components/CountriesList';

import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
   
    <>

      <Navbar />

      <Switch>

        <Route path="/detalles/:id" render={(props) => <CountriesList {...props}/> } />
        <Route />


      </Switch>




    </>


  );
}

export default App;
