import './App.css';
import countries from '../countries.json'
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';


const App = () => {

  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {

    const fetchCountries = async () => {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries')
      setCountriesData(response.data)
    }

    fetchCountries()

  }, [])

  console.log(countriesData)

  return (
    <div className="App">
      <Navbar />
      <h1>Countries App_🌎</h1>
      <div className="container mt-3">
        <div className='row'>
          <div className='col-5' style={{ 'maxHeight': '90vh', 'overflow': 'scroll' }}>
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <div className='col-7'>
            <Routes>
              <Route path='/:country_id' element={<CountryDetails countries={countries} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
