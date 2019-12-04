import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Link } from 'react-router-dom'

import NavBar from './Components/NavBar.js';
import CountryDetail from './Components/CountryDetail.js';

import { Switch, Route, Redirect } from 'react-router-dom'



function App() {
  return (

    <>
    <NavBar/>

    <div class="container">
    <div class="row">
    <div class="col-5">
        <div class="list-group">
        {countries.map((eachCountry, idx) => (
            <div key={eachCountry.cca3}>
            <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>
            {eachCountry.flag} {eachCountry.name.official}
            </Link>
            </div>
            ))}
        </div>
      </div>
      <div class="col-7">      
        <Route exact path="/:cca3" component={CountryDetail}/>
      </div>
      </div>
      </div>

} />




      </>
   
  );
}

export default App;

