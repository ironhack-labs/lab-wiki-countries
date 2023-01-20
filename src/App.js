import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Data from './countries.json';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState(Data);

  useEffect(() => {
    async function functionLoadCountries() {
      try {
        const response = await fetch(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    functionLoadCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}

        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path=":alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
