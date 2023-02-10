import dataCountries from '../src/countries.json';
import { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Navbar, CountriesList} from './components'

function App() {
  const [countries, setCountries] = useState(dataCountries);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
            <div className="global-card">
              {
                countries.map((country,index_country) =>(
              <CountriesList
                  key={index_country}
                  name = {country.name}
                  alpha2Code = {country.alpha2Code}
              
              />
              ))
              }
            </div>
            }
          />
      </Routes>
    </div>
  );
}

export default App;
