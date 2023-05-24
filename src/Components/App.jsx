import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import CountriesList from "./CountriesList/CountriesList";
import CountryDetails from './CountryDetails/CountryDetails';
import { useEffect, useState } from "react";
import Axios from 'axios';



function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    Axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, [setCountries])



  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <CountriesList countries={countries} />
          </div>
          <div className="col-6">
            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

