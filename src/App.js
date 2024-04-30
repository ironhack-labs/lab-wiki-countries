import { Route, Routes } from "react-router-dom";
import "./App.css";
// import countriesData from './countries.json'
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
      })
      .catch(err => console.log(err))
  }, [])

  return <div className="App">
          <Navbar />
              <div className="container">
                  <div className="row">
                      <div className="col-6">
                          <CountriesList countries={countries} />
                      </div>
                      <div className="col-6">
                          <Routes> 
                              <Route
                                  path="/:countryAlpha3Code"
                                  element={ <CountryDetails countries={countries} /> }
                              />
                          </Routes>
                      </div>
                  </div>
              </div>
  </div>;
}

export default App;
