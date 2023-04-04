import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { useState } from 'react';
import countriesDB from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesDB);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll', overflowX:' hidden'}} >
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
            <div class="col-7">
              <Routes>
                <Route to="/" element={<></>} />
                <Route to="/:code" element={<CountryDetail />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default App;
