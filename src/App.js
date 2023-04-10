import { useState } from 'react';
import { Route, Routes } from 'react-router-dom' 
import './App.css';
import countriesDB from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesDB);

  return <div className="App">
    <Navbar />
    <div className='d-flex flex-row'>
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/>}/>
      </Routes>
    </div>
    
  </div>;
}

export default App;
