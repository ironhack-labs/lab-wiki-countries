import './App.css';
import countriesData from './countries.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <CountriesList countries={countries} />
          </div>
          <div className='col-7'>
            <Routes>
              <Route path='/:country_id' element={<CountryDetail countries={countries} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;