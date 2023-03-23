
import './App.css';
import countriesData from "./countries.json";
import { useState } from 'react';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
 import { Route,Routes } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      
    <Navbar/>
    <div className="row">
    <div className="col-6">
    <CountriesList countries = {countries}/>
    </div>
    <div className="col-6">
    <Routes>
    <Route path = "/country/:countryId" element = {<CountryDetails countries = {countries}/>} />
    </Routes>
 </div>
    </div>
    </div>
  );
}

export default App;
