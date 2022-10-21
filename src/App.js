import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <div className="container">
        <div className="row">
          <Routes>
            
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
