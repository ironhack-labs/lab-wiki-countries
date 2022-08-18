import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState([])

  const getCountries = async () => {
    try {
      let response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountry(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getCountries();
  }, []);


  return (
    <div className="App">
      <Navbar />
      {/* <CountriesList /> */}
      <Routes>
        <Route path="/wikicountries" element={<CountriesList />} />
        <Route path="/:id" element={<CountryDetails countryID={country}/>} />
      </Routes>

    </div>
  );
}

export default App;
