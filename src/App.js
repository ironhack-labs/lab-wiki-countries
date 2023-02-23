import { useState } from 'react';
import './App.css';
import countriesData from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(countriesData)
  
  
  return (
    <div className="App">
     <Navbar/>
  
     <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
