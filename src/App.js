import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

// COMPONENTS
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {

  const apiUrl = 'https://ih-countries-api.herokuapp.com';

  // create a stateful variable and initialize it to null
  const [countries, setCountries] = useState(null); 

  useEffect(() => {
    axios.get(`${apiUrl}/countries`) // get request to the API, returns a promise
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Fail retrieving the countris from the API: ', error);
      });
  }, []);

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">

          {countries 
            ? <CountriesList countries={countries} />
            : <div className="spinner-border"></div>
          }

          <Routes>
            <Route path='{`/:countryId}' element={ <CountryDetails countries={countries} /> } />
            <Route path={`/:countryId`} element={ <CountryDetails /> } />
          </Routes>

        </div>
      </div>

    </div>
  );
}

export default App;
