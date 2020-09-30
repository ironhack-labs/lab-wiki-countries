import React from 'react';
import Navbar  from './layout/Navbar'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import CountryList from './pages/CountriesList'
import Details from './pages/CountryDetails'

function App() {
  return (
  
  <>
  <Navbar/>
  <div className="row">
  <CountryList/>
  <Switch>
  
        <Route path="/:id" render={props => <Details  {...props}/>} />
      
      </Switch>
      </div>
  </>

  )
}

export default App;
