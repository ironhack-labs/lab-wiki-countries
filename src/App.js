import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import countriesJson from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  return (
    <div
      className="App"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <CountriesList countries={countries} />

      <Routes>
        <Route
          path=":alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
