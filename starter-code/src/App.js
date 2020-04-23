import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries';
import CountryDetail from "./components/CountryDetail";
import {Route, Link} from "react-router-dom";

function App() {

  function handleCountrClick(e) {
    removeLinkSelected();
    e.target.classList.add('active');
  }

  function removeLinkSelected () {
    try {
      document.querySelector('.active').classList.remove('active');
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" href="/">WikiCountries</Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{"maxHeight": "90vh", "overflow": "scroll"}}>
            <div className="list-group">
             {countries.map((country,index) => <Link onClick={handleCountrClick} key={index} className={"list-group-item list-group-item-action " + (index === 0 ? 'active' : '')} to={`/${country.cca3}`}>{country.flag}🇦🇼{country.name.common}</Link>)}
            </div>
          </div>
          <div className="col-7">
            <Route path='/' exact component={CountryDetail}/>
            <Route path='/:countryCode' render={(props) => <CountryDetail {...props} handleNotFoundCountry={removeLinkSelected} />}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
