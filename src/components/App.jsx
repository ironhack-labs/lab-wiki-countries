import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import countries from '../countries.json';
import CountryDetails from './CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>WIKI COUNTRIES</h1>
      <Routes>
        <Route path='/' element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
        <Route path="/:id/:id" element={<CountryDetails countries={countries} />} />

      </Routes>
    </div>

  );
}

export default App;
