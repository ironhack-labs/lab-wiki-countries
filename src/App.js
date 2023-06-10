import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countriesAll, setCountriesAll] = useState(countries);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element= {countriesAll.map((country) => {
        return <CountriesList key={country.alpha3Code} oneCountry={country} />;
      })}>

        </Route>
        <Route
          path="/details/:countryCode"
          element={<CountryDetails countries={countriesAll} />}
        />
      </Routes>
    </div>
  );
}

export default App;
