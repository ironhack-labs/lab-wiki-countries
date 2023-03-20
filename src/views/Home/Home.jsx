import React from 'react';
import CountriesList from '../../components/CountriesList/CountriesList';
import { useState, useEffect, useCallback } from 'react';
import { listCountries} from './../../services/WikiService';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from '../../components/CountryDetails/CountryDetails';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true)

  const getCountries = useCallback(() => {
    setLoading(true);
    listCountries()
    .then((countries) => {
      setLoading(false)
      setCountries(countries)}) ;
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const renderCities = () => {
    if (loading) {
      return <p>Loading...</p>
    } 
    return <CountriesList countries={countries} />
  }

  const renderDetails = () => {
    if (loading) {
      return <p></p>
    } 
    return <CountryDetails  countries={countries} />
  }

  return (
    <div className="row">
     {renderCities()}
      <Routes>
        <Route path="/:id" element={renderDetails()} />
      </Routes>
    </div>
  );
};

export default Home;
