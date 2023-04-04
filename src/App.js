import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div class="col-3">
            <CountriesList countries={countries} />
          </div>
          <div class="col-4">
            <Routes>
              <Route path="/:id" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
