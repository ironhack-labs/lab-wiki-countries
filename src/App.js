import countriesArray from './countries.json';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(countriesArray);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
