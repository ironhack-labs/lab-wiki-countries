import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { useEffect, useState } from "react";

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'

function App() {

  const [listOfCountries, setListOfCountries] = useState([])

  // setListOfCountries(countries)
  // console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <CountriesList listOfCountries={countries}/>

    </div>
  );
}

export default App;
