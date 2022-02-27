import Navbar from './components/Navbar';
// import listOfCountry from "./countries.json"
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./components/CountriesList.css"




function App() {

  const [countries, setcountries] = useState([])
  

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((result) => {
        // console.log(result.data)
        setcountries(result.data);
      })
      .catch();
  }, []);

  return (
    <div className="App">  
       <Navbar />

      <div>
      <div class="column">
      <CountriesList countries={countries} />
      </div>
      <div class="column stickyDetails">
       <Routes>
        <Route path="/:Id" element={<CountryDetails countries={countries}/>} />
       </Routes>
       </div>
      </div>

  

    </div>
  );
}

export default App;
