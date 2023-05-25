import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountryList from './CountriesList/CountriesList';
import NavBar from './Navbar/Navbar';
import CountryDetails from '../CountryDetails/CountryDetails';
import { useEffect, useState } from "react";
import axios from "axios"



function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries").then(
      response => {
        const countriesData = response.data
        setCountries(countriesData)
      })
  }, [])
  return (
    <div className="App">
      <NavBar />

      <hr />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CountryList Countries={countries} />
          </div>
          <div className="col-8">
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails Countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
