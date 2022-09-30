import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import {useState,useEffect} from 'react'

function App() {

  const [countryList,setCountryList] = useState([]);

  useEffect(()=>{
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(res => res.json())
      .then(json => setCountryList(json))
      .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <CountriesList countryData={countryList}/>
        } />       
        <Route path="/:countryCode" element={
        <div id='page'>
          <CountriesList countryData={countryList}/>
          <CountryDetails countryData={countryList}/>
        </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
