import './App.css';
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState([])
  const baseUrl = 'https://ih-countries-api.herokuapp.com'
  
useEffect(()=> {
  axios
  .get(`${baseUrl}/countries`)
  .then((response) => {
    setCountries(response.data)
  })
  .catch((e) => console.log(e))
}, [])


  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="row">
        <CountriesList countries={countries}/>
        <Routes>
        <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
        </Routes>  
      </div>
      </div>
</div>     
  );
}

export default App;
