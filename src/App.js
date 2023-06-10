import logo from './logo.svg';
import './App.css';
import countries from "./countries.json";
import Navbar from "./components/Navbar.jsx"
import CountriesList from './components/CountriesList';
import { useState } from 'react';

function App() {
  const [countriesAll, setCountriesAll] = useState(countries);
  return (
    <div className="App">
    <Navbar /> 
    {countriesAll.map((country) => {
        return (
          <CountriesList
            key={country.alpha3Code}
            oneCountry={country}
          />
        );
    })}

      
     
    </div>
  );
}

export default App;
