import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

import countriesList from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content">
        <CountriesList countries={countriesList} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countries={countriesList} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
