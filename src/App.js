import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import dataCountries from './countries.json';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';


function App() {

  const [countries, setCountries] = useState(dataCountries)
  
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList countries={countries} />
          </div>
          <div className="col">
            <Routes>
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
