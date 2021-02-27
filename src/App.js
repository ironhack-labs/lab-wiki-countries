import React from 'react'
import './App.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';


function App() {
  
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/countries' component={CountriesList} />
        </Switch>
        <Switch>
          <Route exact path='/countries/:country' component={CountryDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
