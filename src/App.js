import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesInfo from './countries.json'
import CountryDetails from './components/CountryDetails';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  // const [countries, setCountries] = useState(countriesInfo)
  

  return (
    <div className="App ">
      <Navbar />
      <div className="container d-flex justify-content-between mt-5 pt-4 country-list">
        <div className="row col-4">
          <CountriesList countries={countriesInfo} />
        </div>
        <div className="row col-8">
          <Routes>
            <Route path="/:id" element={ <CountryDetails countries={countriesInfo} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
