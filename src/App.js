import axios from "axios";
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countryArr, setCountryArr] = useState([]);
  
  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountryArr(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <CountriesList countryArr={countryArr} />

      <Routes>
        <Route
          path="/:id"
          element={<CountryDetails countryDetails={countryArr} />}
        />
      </Routes>
    </div>
  );
}
export default App;