import countriesFromDb from './countries.json';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesFromDb);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/countries/:countryId"
              element={<CountryDetails countries={countries} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
