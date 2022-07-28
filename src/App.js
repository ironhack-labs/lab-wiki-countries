import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import CountryDetails from './Components/CountryDetails.jsx'
import CountriesList from './Components/CountriesList';
//import countries from "./countries.json"

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((info) => info.json())
      .then((datos) => {
        setCountries(datos);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <CountriesList countries={countries} />
      </div>
    </div>
  );
}

export default App;
