import './App.css';
import countries from './countries.json';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
    };

    axios(config)
      .then((response) => {
        setCountriesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!countriesData){
    return <p>Loading page</p>
  }

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
        {<CountriesList countriesData={countriesData} />}
          <Routes>
            <Route path="/:id" element={<CountryDetails countriesData={countriesData} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
