//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => res.json())
      .then((json) => setCountryList(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countryData={countryList} />
          <Routes>
            <Route path="/:countryCode" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
