import { useState } from 'react';
import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesData={countriesData} />
          <Routes>
          <Route
              path="/:countryId"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
