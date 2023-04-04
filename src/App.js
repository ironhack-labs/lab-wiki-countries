import countriesJson from './countries.json';
import { useState } from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState(countriesJson);

  return (
    <div className="App font-[Poppins]" >
      <Navbar />
      <div className='flex'>
        <CountriesList countries={countries} />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
