import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import countriesJson from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  const [countries, setCountries] = useState(countriesJson)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
