import "./App.css";
import { useState, useEffect } from 'react';

import countriesData from "./countries.json";
import Navbar from "./components/Navbar"
import CountryList from "./components/CountryList"


function App() {
  const [countries, setCountries] = useState(countriesData)


  return( 
    <div className="App">

      <Navbar />
      <CountryList countries={countries} />

  
    </div>
    
  
  )
}
export default App;