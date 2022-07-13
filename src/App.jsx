import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import countriesData from "./countries.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-md-4'>
          <CountriesList countriesData={countriesData} />

        </div>
        <div className='col-md-8'>
          <Routes>
            {/* <Route path="/" /> */}
            {/* <Route path="/countries" element={<CountriesList countriesData={countriesData} />} /> */}
            <Route path="/countries/:country_id" element={<CountryDetails countriesData={countriesData} />} />
          </Routes>
        </div>

      </div>


    </div>
  );
}

export default App;
