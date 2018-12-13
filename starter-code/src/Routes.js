import React from 'react'
import { Route, Switch} from 'react-router-dom'
import CountriesList from './components/countries/CountriesList'
import CountryDetail from './components/countries/CountryDetail'

const Routes = () =>(
  <Switch>
    <Route exact path='/' component={CountriesList}/>  
    <Route path='/country/:ccn3' component={CountryDetail}/>
  </Switch>
)

export default Routes