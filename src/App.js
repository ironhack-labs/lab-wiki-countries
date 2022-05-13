import NavBar from './components/NavBar';
import './App.css';
import CountriesList from './components/CountriesList';
import { Route, Routes, } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then( response => {
            setCountries(response.data) 
        })
        .catch(err => console.log('Error getting data from API', err))
}, [])




  return (
    <div className="App">
    <NavBar />
  
    <div className="container">
      <div className="row">
      <Routes>
      <Route path="/" element={<CountriesList countriesArr={countries} />} />
      <Route path="/:iataCode" element={<CountryDetails countriesArr={countries} />}/>
      </Routes>
    </div>
  </div>
</div>
  );
}

export default App;
