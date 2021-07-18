import './App.css';
import countryList from "./countries.json";
import React, {useState} from "react";

import NavBar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"

import { BrowserRouter, Route } from 'react-router-dom';


function App() {

  const [countries, updateCountries] = useState(countryList)

  const countryListCopy = [...countryList];

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />

        <div className = "mamDiv">
          <div className = "leftDiv">
           <CountriesList allCountries={countryListCopy}/> 
          </div>
          <div className = "rightDiv">
            <Route path="/CountryDetails/:name" render={props => <CountryDetails fullList={countryListCopy} {...props} />}/>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
