import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        const data = response.data;
        setCountries(data);
        setFetching(false);
      })
    },[]
  );

  return (
    <div className="App">
      <Navbar />
      <div className="container">
      {fetching && <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="loading..."></img>}
      {!fetching && 
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countries}/>} />
          </Routes>     
        </div>
      }
      </div>
    </div>
  );
}

export default App;
