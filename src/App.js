// src/App.js
import { Route, Routes } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

import countries from './countries.json';

import './App.css';

const imgUrl = `https://flagpedia.net/data/flags/icon/72x54/`;

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {<CountriesList imgUrl={imgUrl} />}

        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} imgUrl={imgUrl} />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
