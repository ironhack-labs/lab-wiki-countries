import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails'

function RouterApp() {
    return (
      <Router>
<Switch>

<Route component={Navbar} exact path='/' />
 <Route component={CountriesList} path='/CountriesList' />
<Route component={CountryDetails} path='/coutryDetails' />
   
</Switch>


      <CountriesList />
      <Switch>
        <Route path="/countries/:cca3" component={CountryDetails} />
      </Switch>
</Router>
  )
}

export default RouterApp