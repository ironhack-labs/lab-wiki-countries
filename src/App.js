import './App.css';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';
// import countries from './countries.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countryData, setCountryData] = useState([]);

  async function getCountries() {
    try {
      let response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      let dataResponse = await response.data;
      setCountryData((old) => (old = dataResponse));
    } catch (error) {
      return 'there was an error';
    }
  }
  useEffect(() => {
    getCountries();
  }, []);

  // let countriesListData = countries.map((country) => {
  //   return {
  //     alpha2Code: country.alpha2Code,
  //     alpha3Code: country.alpha3Code,
  //     name: country.name.common,
  //   };
  // });

  let countriesListData2 = countryData
    .sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    })
    .map((country) => {
      return {
        alpha2Code: country.alpha2Code,
        alpha3Code: country.alpha3Code,
        name: country.name.common,
      };
    });

  // let sortedCountries = countriesListData2.sort((a, b) => b.name - a.name);
  // console.log(sortedCountries);

  console.log(countriesListData2);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesListData2} />
          <Routes>
            <Route
              path={'/:id'}
              element={<CountryDetails countries={countryData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
