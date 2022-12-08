import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import countries from './countries.json';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {

  const [listOfCountries, setlistOfCountries] = useState([])

 useEffect( () => {
  axios.get('https://ih-countries-api.herokuapp.com/countries')
  .then(results => {
   console.log(results.data)
   setlistOfCountries(results.data)
  })
  .catch(err => console.log(err))
 }, [])

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
        </div>
        <Routes>
          <Route path = "/" element = {  <CountriesList listOfCountries = {listOfCountries}/>} />
          <Route path = "/:countryId" element = { <CountryDetails  /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
