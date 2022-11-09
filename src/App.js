import './App.css';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const url = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(url);
      const data = await response.json();
      const sortedData = data.sort((a, b) => {
        return a.alpha3Code < b.alpha3Code ? -1 : 1;
      });
      setCountries(sortedData);
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="mainPage">
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
