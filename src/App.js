import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
function App() {
  const [countries, setCountries] = useState(countriesJSON)

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
      {/*Add Routes  */}
    </div>
  );
}

export default App;
