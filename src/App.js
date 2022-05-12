import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/Navbar';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) =>
        console.log('error getting the list of countries from API', error)
      );
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className='container'>
      <div className="row">
        <CountriesList countriesList={countries} />
        <Routes>
          <Route path="/countryDetails/:alpha3Code" element={<CountryDetails countriesList={countries}/>}/>
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
