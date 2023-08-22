import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import data from './countries.json'
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState(null)
  const url =  "https://ih-countries-api.herokuapp.com/countries"


  useEffect(() => {
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(resposta => {
      setCountries(resposta)
    })
    }, []);


  console.log(countries)

  return (
 <>

     {!countries && <h3>Country not found!</h3>}
     {countries && (
      <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={ <CountryDetails  countries={countries}  /> } />
      </Routes>
      </div>
      </div>
    </div>
     )}
    </>
  );
}

export default App;