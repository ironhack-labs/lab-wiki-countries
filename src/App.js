import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import countries from "./countries.json"
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(null);

  const apiURL="https://ih-crud-api.herokuapp.com"

 

  useEffect(() => {
   axios.get(apiURL+"/countries")
   .then((response) => {
    setCountries(response.data);
   })
   .catch(e => {
    console.log("error getting countries from API...", e);
  })
  }, [])

  const renderCountriesList = () => {
    return (
      <div className="App">
      <Navbar />
      <CountriesList renderCountriesList={countries}/>
      <Routes>
        <Route path='/:alpha3Code' element={<CountryDetails countries={countries} />} />
    
      </Routes>
      </div>
    );
 

  
}
}
export default App;
