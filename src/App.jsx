import countriesJSON from './countries.json';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

const App = () => {
  const [countries] = useState(countriesJSON);
  const [alphas, setAlphas] = useState([]);

  useEffect(() => {
    const alphaToName = [];
    countries.forEach((country) => {
      alphaToName.push({
        alpha3Code: country.alpha3Code,
        alpha2Code: country.alpha2Code,
        name: country.name.common,
      });
    });
    setAlphas(alphaToName);
  }, [countries]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} alphas={alphas} />
          <Routes>
            <Route path="/" element={<></>} />
            <Route
              path="/:code"
              element={<CountryDetails countries={countries} alphas={alphas} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
