import './App.css';
import { Route, Routes } from 'react-router-dom';
//import countries from './../countries.json'
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';

/* axios.get(' https://ih-countries-api.herokuapp.com/countries')
  .then(response => {
    data = response.text;
    console.log(data);
  })
  .catch(error => {
    console.log(error.message);
  }) */

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return <div className="App">
    <Navbar></Navbar>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CountriesList countries={countries} />
        </div>
        <div className="col-md-6">
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
}

export default App;