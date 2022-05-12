import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState,useEffect } from 'react'; 
import axios from 'axios';
import './App.css';



function App() {


const [countries, setCountries] = useState([]);
useEffect(()=>{
 axios.get('https://ih-countries-api.herokuapp.com/countries')
 .then((responseArr=>setCountries(responseArr.data)))
 .catch(e=>console.log('Error getting countrieslist from API',e))
},[])


  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/'  element={<CountriesList countries={countries}  />} />
      <Route path='/:countryId'  element={<CountryDetails countries={countries} />} />
    </Routes>
    
    
    </div>
  );
}

export default App;
