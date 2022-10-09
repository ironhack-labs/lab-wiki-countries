import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
// import CountryArray from './countries.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => {
        setCountries(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="CountryWrapper">
        <CountryList countries={countries} />
        <Routes>
          {/* <Route path="/" element={<CountryList countries={countries} />} /> */}
          <Route path="/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
