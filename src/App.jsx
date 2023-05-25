import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import { useState, useEffect } from "react";
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {

  const [countries, setCountries] = useState([])


  useEffect(() => {

    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(responseFromApi => setCountries(responseFromApi.data))
      .catch(error => console.error(error));

  }, []);




  return (

    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">

          <div className="col-4">
            <CountriesList countries={countries} />
          </div>

          <div className="col-8">

            <Routes>
              <Route path="/countries-details/:country_code" element={<CountryDetails countries={countries} />} />
            </Routes>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
