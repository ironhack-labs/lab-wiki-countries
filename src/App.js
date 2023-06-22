import { Route, Routes } from 'react-router-dom';
import './App.css';
import countriesData from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  const[countries, setListOfCountries] = useState(countriesData)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/countrylist' element={<CountriesList countries={countries}/>}/>
        <Route path='/countrydetails/:alpha3Code' element={<CountryDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
