import { useState } from 'react';
import './App.css';
import allCountries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState(allCountries);
  // console.log("countries", countries);

  return (
    <div className="App">
      <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={countries} />
              <CountriesDetails />
            </div>
          </div>

          </div>
    </div>
  );
}

export default App;
