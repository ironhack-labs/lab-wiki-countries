import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'

import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'

function App() {
  return (
    <>

    <Navbar/>

    <Router>


      <Switch>
          <Route exact path="/" component={CountriesList}/>
      </Switch>

      <Switch>
          <Route exact path="/:countryCode" component={CountryDetails}/>
      </Switch>

  


    </Router>
    </>
  );
}

export default App;
