
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json'
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
const [countries, setCountries]=useState(countriesJson)

useEffect(()=>{
  axios
  .get('https://ih-countries-api.herokuapp.com/countries')
  .then((result) => {
    console.log(result.data);
    setCountries(result.data);
  })
  .catch((err) => {console.log(err)
    
  });
},[])



  return <div className="App">
<Navbar/>
<CountriesList countries={countries}/>
<Routes>
<Route path='/:id' element={<CountryDetails countries={countries}/>}/>
</Routes>

  </div>
  
}

export default App;
