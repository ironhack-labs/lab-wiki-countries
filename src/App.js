import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
    <Navbar />

    <div className=" container">
    <div className=" row">
      <CountriesList />
    </div>
      <CountryDetails />
    </div>
    
          
    <Switch>
     
         <Route path = "/:id" component={CountryDetails} />
    </Switch>
    
    </div>
  );
}

export default App;
