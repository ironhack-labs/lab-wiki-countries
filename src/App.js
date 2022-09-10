import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countries from "./countries.json";
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="country-viewer">
        <CountriesList />
        <Routes>
          <Route path="/:alpha3Code"  element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
