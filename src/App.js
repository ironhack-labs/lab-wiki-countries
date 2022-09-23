import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import Navbar from './components/Navbar';
import './App.css';
import CountriesList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

import countriesData from './countries.json'

function App() {
const [countries] = useState(countriesData)

  return (
    <div className="App">
      <Navbar/>
      <div className='pageContent'>
      <CountriesList />
      <Routes>
        <Route path='/:id' element={<CountryDetails countries={countries} />}/> 
      </Routes>
      </div>
    </div>
  );
}

export default App;
