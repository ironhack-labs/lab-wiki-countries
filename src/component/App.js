import React from 'react';
import NavBar from '../component/navbar/NavBar'
import CountriesList from './countries/CountryList'
import CountryDetails from './countries/CountryDetails'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CountriesList />
          </div>
        </div>
      </div>
      <div className='col-6'>

        <Switch>
          <Route path='/:cca3' />
        </Switch>

      </div>

    </>
  )

}

export default App;
