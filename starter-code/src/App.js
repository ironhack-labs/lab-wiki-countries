import React from 'react';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details'
import logo from './logo.svg';
import './App.css';



function App() {

  
  return (
    <div className="App flex_direction">
    <CountryDetails />
     <Switch>
        <Route exact path='/:id' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
