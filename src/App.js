import './App.css';
import CountriesList from './components/CountriesList';
import Navabar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import countries from "./countries.json";
import CountryDetails from './components/CountryDetails';
import { getCountries } from './api';


function App() {

  const [countiresList, setCountiresList] = useState([])

  useEffect(() => {

    async function handleAddAllCountires() {
      const response = await getCountries()
      setCountiresList(response.data)
    }
    handleAddAllCountires()

  }, [])



  return (

    <div className="App">
      <Navabar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countiresList} />
          <Routes>
            <Route path="/" element={''} />
            <Route path="/:id" element={<CountryDetails countries={countiresList} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

