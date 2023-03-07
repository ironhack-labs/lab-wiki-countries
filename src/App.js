import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
// import Countries from './countries.json';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('http://ih-countries-api.herokuapp.com/countries')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setCountries(response);
      })
      .catch((e) => console.error(e))
  }, []);

  if (!countries) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/countries/:countryId" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
