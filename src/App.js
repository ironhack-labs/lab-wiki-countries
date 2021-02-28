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

    <div class="container">
        <div class="row align-items-start">
          <div class="col">      

          <CountriesList/>
          </div>

          <div class="col">
          </div>
          
          <div class="col">
            <Switch>
                <Route exact path="/:countryCode" component={CountryDetails}/>
            </Switch>
          </div>
        </div>
    </div>
    </Router>
    
  </>

)
    
    
}

export default App;
