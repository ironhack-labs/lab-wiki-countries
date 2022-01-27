import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(response.data)
    }
    catch (error){
      window.alert('deu merda')
    }
  }

  useEffect(() => {getCountries()}, [])

  
  
  return (
    <div className="App ">
      <Navbar />
      <div className="container d-flex justify-content-between mt-5 pt-4 country-list">
        <div className="row col-4">
          <CountriesList countries={countries} />
        </div>
        <div className="row col-8">
          <Routes>
            <Route path="/:id" element={ <CountryDetails countries={countries} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
