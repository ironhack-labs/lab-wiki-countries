
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Countries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import { Route, Routes } from 'react-router-dom';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        setCountries(result.data);
      })
      .catch();
  }, []);
  
  return (
    <div className="App">

      <Navbar />
    <Routes>

       <Route path='/' element={<CountriesList Countries = {countries}/>}/> 
       <Route path='/:alpha3Code' element={<CountryDetails Country = {countries}/>}/> 

    </Routes>
    </div>
  );
}

export default App;

