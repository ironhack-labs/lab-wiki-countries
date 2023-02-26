import { useEffect, useState } from "react";
import countriesData from './countries.json';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response)=>{
      setCountries(response.data)
      })
  },[])

  return (
    <div className="App">
      <Navbar />

      {countries.length ?
      <section>
        <div className="container display-flexbox">
          <div className="row list-box">
            <CountriesList countries={countries} />
          </div>
          <div className="details-box">
            <Routes>
              <Route exact path={"/:countryId"} element={ <CountryDetails countries={countries}/>} />
            </Routes>
          </div>
        </div>
      </section>
      :
      <div>
          <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
          <p>Loading...</p>
      </div>}
    </div>
  )
}
export default App;
