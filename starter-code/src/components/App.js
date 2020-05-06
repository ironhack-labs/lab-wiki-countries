import React from 'react';

import Navbar from './ui/navbar/Navbar'
import Home from './pages/home/Home'
import Countries from './pages/countries/Countries'
import CountriesDetails from './pages/countries/CountriesDetails'

import './App.css';

import { Switch, Route } from 'react-router-dom'


function App() {
  return (

    <>
    <Navbar/>

    <main className="container">
    <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/countries" exact render={() => <Countries />} />
        <Route path="/countries/:id" render={props => <CountriesDetails {...props} />} />
    </Switch>
    </main>

    </>
  );
}

export default App;
