import './App.css';
import Navbarr from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from "react-router-dom";

import countries from './countries.json'

function App() {

  
  return (
    <div className="App">
      <Navbarr />
      <div className="container">
        <div className="row">
        {<CountriesList countries={countries}/>}
        <Routes>
          <Route path='/:countryCode' element={<CountryDetails countriesProp={countriesData} />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
