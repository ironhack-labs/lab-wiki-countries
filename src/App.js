import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
/* import countriesData from './countries.json'; */
//import { useState, useEffect } from 'react';

function App() {
  /*   const [countries, setCountries] = useState([]); */

  /*   useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((er) => console.log(er));
  }, []); */

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CountriesList />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/:countryId" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
