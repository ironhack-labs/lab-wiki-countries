import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import countriesList from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />

      <Routes>
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countriesList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
