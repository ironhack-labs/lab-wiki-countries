import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from '../../components/CountriesList/CountriesList';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import Navbar from '../../components/Navbar/Navbar';
import { fetchCountries } from './../../services/services'

const Home = () => {

  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(() => {
    fetchCountries()
      .then((countries) => setCountries(countries))
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);
  
  
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path='/:id' element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
