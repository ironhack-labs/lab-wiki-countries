import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import countries from "./countries.json";
import CountriesList from './components/CountriesList';



function App() {

  const[countriesArr, setCountriesArr] = useState(countries)

  return (
    <div className="App">
    <Navbar/> 
   <CountriesList countriesArr={countriesArr}/>

    </div>
    
  );
}

export default App;
