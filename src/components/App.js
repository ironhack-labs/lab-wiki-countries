import './App.css'
import {Link, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import countries from './../countries.json'

function App() {
  return (
<>
  <Navbar/>
  <div className="container">
  <div className="row">
    <div className="col-6">
    <CountriesList/>
    </div>
    <Switch>
    <div className="col-6">
    <Route path="/:cca3" render ={(props)=> <CountryDetails {...props} countries={countries}/>}/>
    </div>
    </Switch>
  </div>
  </div>
  </>
  )
}

export default App
