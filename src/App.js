import './App.css';
import Navbar from './components/Navbar';
 import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';

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
    <div className="container"></div>
    <CountriesList countries={countries}/>
    </div>
);
}
// const [countries, setCountrylist] = useState([]);
export default App;
