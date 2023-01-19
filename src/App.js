import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import countriesFromJSON from './countries.json';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const baseURL = "https://ih-countries-api.herokuapp.com";

  useEffect(() => {
    axios
      .get(baseURL + '/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); // this will only be called once, that is why we have an empty array


  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route
              path="/:alpha3CodeURL"
              element={<CountryDetails countries={countries} setCountries={setCountries}/>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
