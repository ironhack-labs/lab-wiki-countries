import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countryArr from './countries.json';

function App() {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  // console.log('yes', data);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {!fetching && 'data loading...'}
        <Route exact path="/" element={<Home />} />
        <Route path="/CountriesList" element={<CountriesList data={data} />} />
        <Route
          path="/:id"
          element={<CountryDetails countryArr={countryArr} />}
        />
      </Routes>
    </div>
  );
}

export default App;
