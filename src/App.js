import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import axios from 'axios';
import './App.css';
import CountriesList from './Components/CountriesList/CountriesList';

import NavBar from './Components/NavBar/NavBar';
//import conutriesListJSON from './countries.json';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {

  const [countriesList, setCountriesList] = useState([])
  const [messege, setMessege] = useState('')
  useEffect(() => {
    setMessege('Loading from API ...')
    //Calling API
    axios({
      method: 'get',
      url: 'https://restcountries.com/v2/all',
    }).then(data => {
      setCountriesList([...data.data])
      setMessege('');
      // console.log("API", data.data[0])
    })
      .catch(err => setMessege(`Some thing happend on Calling API Erro object : ${err}`))
    //UnComment this and comment the above to work with Local jsonFile
    // setCountriesList([...conutriesListJSON])
  }, []);


  return (
    <div className="App">
      <h1>{messege}</h1>
      <NavBar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/*" element={<CountriesList countries={countriesList} />} />

          </Routes>


        </div>
      </div>
    </div>
  );
}

export default App;
