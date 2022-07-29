
import './App.css';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesArr from './countries.json'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
 const [countries, setCountries] = useState(countriesArr)

  return (
    <div className="App">
      <Navbar />
      <CountryList countries={countries} />
      <CountryDetails />

      <Routes>
          <Route path="/:code" element={ <CountryDetails countries={countries} /> } />
        </Routes>
    </div>
  );
}

export default App;
