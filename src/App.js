// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
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
    return <div>Getting data...</div>;
  }

  if (isError) {
    return <div>An error occured, please refresh the page.</div>;
  }

  if (!isLoading) {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={allCountries} />
          </div>
          <Routes>
            <Route
              path="/:name"
              element={<CountryDetails countries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
