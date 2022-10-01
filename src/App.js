import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<CountriesList countriesData={countriesData} />}
        />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
