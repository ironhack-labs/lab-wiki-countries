import './App.css';
import { Routes, Route } from 'react-router-dom';
// import countryList from './countries.json';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Navbar} from './components/Navbar'
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([])

  const baseUrl = "https://ih-countries-api.herokuapp.com"

  useEffect( () => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    axios
      .get(baseUrl + '/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  
  return (
    <div className="App">

      <header>
        <Navbar/>
      </header>

      {countries.length === 0
        ? <div className="loading">loading..</div>
        : <div className="container">

            <div className="row">
              <CountriesList countries={countries}/>
            </div> 

            <Routes>
              <Route path="/:id" element={ <CountryDetails countries={countries} /> } />
            </Routes>

          </div>
      }

    </div>
  );
}

export default App;