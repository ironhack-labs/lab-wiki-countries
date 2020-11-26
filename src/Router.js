import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'




  
  const RouterApp = () => {
      return (

          <Router>
              <NavBar/>
              <div className="columns">
              <div class="tile is-vertical is-2">
              <article class="tile is-child notification is-danger">
           
            <CountriesList />
            </article>
            </div>
            
                 <Switch>
                 <Route component={CountryDetails} path="/country/:id" />
                 </Switch>
            </div>
             
             
          </Router>
      )
  }
  
  export default RouterApp
  