import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';

function App() {
  const [countryList, setCountries] = useState(countriesJSON);

  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={countryList} />
      <Routes>
        <Route
          path="/countries"
          element={<CountriesList allCountries={countryList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
