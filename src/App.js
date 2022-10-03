// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        const rectifyBS = result.data.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
        // console.log('result data is: ', result.data);
        setAllCountries(rectifyBS);
      })
      .catch((err) => {
        console.log('error: ', err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '6rem',
        }}
      >
        <h3>Fetching data. Please wait...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '6rem',
        }}
      >
        <h3>An error occured, please refresh the page.</h3>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div className="App">
        <Navbar />
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div
            className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
            style={{ display: 'flex' }}
          >
            <CountriesList
              className="list-group-item list-group-item-action py-3 lh-sm"
              style={{ display: 'flex' }}
              countries={allCountries}
            />
          </div>
          <div className='"border border-muted list-group-item list-group-item-action py-3 lh-sm"'>
            <Routes>
              <Route
                path="/:name"
                element={<CountryDetails countries={allCountries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
