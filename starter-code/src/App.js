import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail.js'
import { NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const allCountries = countries.map((eachCountry, index) => {

    //console.log(eachCountry)
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overFlow: "scroll" }} key={index}>
            <div className="listGroup">
              <NavLink to={`/countries/${eachCountry.cca3}`}>{<img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt='' />} {eachCountry.name.common}</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/countries/:cca3' component={CountryDetail} />
              </Switch>
              {allCountries}

            </div>
  );
}

export default App
