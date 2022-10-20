import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  const [listofCountries, setListOfCountries] = useState(countries);
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={listofCountries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={listofCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
