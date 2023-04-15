import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route
          path="/:id"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
