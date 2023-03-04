import { Routes, Route,useRouterMatch } from 'react-router-dom';
import '../App.css';
import { CountriesList, Navbar, CountryDetails } from '../components';
import dataCountries from '../countries.json';
import { useState } from 'react';
function Dashboard() {
  const [countries, setCountries] = useState(dataCountries);
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route
              path=":idCountry"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;