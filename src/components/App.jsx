import './App.css';
import countries from '../countries.json';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [country, setCountry] = useState([])

  useEffect(() => {                            // Fase de montaje

    axios.get('https://ih-countries-api.herokuapp.com/countries ')
      .then(({ data }) => {
        setCountry(data)
      })
  }, [])

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-4 Country-list">
            <CountriesList />
          </div>
          <div className="col-8">
            <Routes>

              <Route path='/:country_id' element={<CountryDetails />} />

            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
