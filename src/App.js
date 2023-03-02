import logo from './logo.svg';
import './App.css';
import countries from '../src/countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<CountriesList></CountriesList>} />
        <Route path="/country/:countryId" element={ <CountryDetails countries = {countries} /> } />

      </Routes>
    </div>
  );
}

export default App;
