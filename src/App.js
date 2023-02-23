import './App.css';
import countriesJSON from "./countries.json"
import { useState } from "react"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(countriesJSON)

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <CountriesList countries={countries} />
          </div>
          <div className="col-sm-4">
          <Routes>
            <Route path="/countryDetails/:code" element={<CountryDetails countries={countries} />} />

          </Routes>
          </div>
        </div>
      </div>

      
      

      

    </div>
  );
}

export default App;
