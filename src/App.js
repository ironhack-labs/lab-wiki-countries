import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';


function App() {
  return (
<div className="App">
        <Navbar/>

        <div className="container">
            <div className="row">
              <CountriesList />
              <Switch>
                <Route exact path="/:id" component={CountryDetails}/>
              </Switch>
            </div>
        </div>
  </div>
  );
}

export default App;
