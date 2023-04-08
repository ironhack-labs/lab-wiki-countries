import './App.css';
import { useState } from 'react';
import data from './countries.json'
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(data);

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row d-flex flex-nowrap'>
        <CountriesList countries={countries}/>
        <Routes>
          <Route path="/:id" element={ <CountryDetails countries={countries}/> } />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
