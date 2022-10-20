import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

function App() {
  const [countriesArr, setCountriesArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesArr(response.data);
      })
      .catch((e) => console.log('error getting countries', e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesArr} />
      {/* <Routes>
        <Route path="/" element={<CountriesList characters={countriesArr} />} />
      </Routes> */}
    </div>
  );
}

export default App;
