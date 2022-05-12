import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesArr from './countries.json'
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesArr);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={ <CountriesList countries={countries} />} />
            <Route path='/country/:countryId' element={ <CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;