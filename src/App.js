import './App.css';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countryData from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState(countryData);

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
