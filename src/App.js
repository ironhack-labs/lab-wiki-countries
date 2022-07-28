import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CounrtyDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);


  const fetchCountries = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL)
      .then((response) => {
        const allCountries = response.data;
        setCountries(allCountries);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
    <div className="App">

      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path='/' element={<div />}></Route>
        <Route path="/countries/:countryId" element={<CounrtyDetails countries={countries} />} />
      </Routes>


    </div>
  );
}

export default App;
