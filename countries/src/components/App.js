import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar/Navbar';
import CountriesList from './countriesList/CountriesList';
import CountriesDetails from './countriesDetails/CountriesDetails';
import { Switch, Route } from 'react-router-dom';



function App() {

  return (

    <>

      <div>

        <Navbar />

        <div className="countriesStyle">

          <CountriesList />

          <Switch>

            <Route path="/countries/:cca3" component={CountriesDetails} />

          </Switch>

        </div>

      </div >

    </>
  )
}


export default App







