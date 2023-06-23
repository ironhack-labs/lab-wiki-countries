import './App.css';
/* import countries from './countries.json'; */
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [listOfCountries, setListOfCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      console.log('countries list', response);

      setListOfCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<CountriesList listOfCountries={listOfCountries} />}
        />

        <Route
          path="/:alphaCode"
          element={<CountryDetails listOfCountries={listOfCountries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
