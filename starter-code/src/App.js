import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import Details from './Details';

function App() {
  return (
    <div className="App">
      <CountryDetails/>
      <Switch>
        
        <Route exact path ='/:id' component={Details}/>
      </Switch>
      
    </div>
  );
}

export default App;
