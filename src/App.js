import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import countryData from './countries.json'

function App() {

  const [countriesArray, setCountriesArray] = useState([]);

  const countriesAPIURL = 'https://ih-countries-api.herokuapp.com/countries'

  useEffect(() => {
    fetch(countriesAPIURL)
      .then(res => res.json())
      .then(jsonArray => setCountriesArray(jsonArray))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <CountriesList countriesArray={countriesArray} />
          </div>
          <div className="col-7">
            <CountryDetails countriesArray={countriesArray}/>
            <div>
              <Routes>
                <Route path='/' element={<p>choose a country!</p>} />
                <Route path="/:countryCode" element={ <CountryDetails countriesArray={countriesArray} />} />
              </Routes> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;