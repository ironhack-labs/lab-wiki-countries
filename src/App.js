import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import countriesArr from "./countries.json"
import axios from 'axios';

function App() {

 
  const [countries, setCountries] = useState(countriesArr);

 
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then( response => {
      setCountries(response.data); //save into state variable
    })
    .catch( e => console.log("error getting countriesfrom API", e))
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <CountriesList listOfCountries={countries}/>

      <Routes>
      <Route path="/countries/:countryId" element={ <CountryDetails allCountries={countries} /> } />
      
      </Routes>

    </div>
    
  );
}

export default App;
