import React from 'react'
import Navbar from './Navbar/Navbar'
import CountriesList from '../components/CountriesList/CountriesList'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import CountriesDetails from '../components/CountriesDetails/CountriesDetails'

function App() {
  return (
    <>

      <div>
        <Navbar />
        <div className="countriesStyle">
          <CountriesList />
          <Switch>
            <Route path="/:code" render={props => <CountriesDetails {...props} />} />
          </Switch>
        </div>
      </div >
    </>
  )
}


export default App










