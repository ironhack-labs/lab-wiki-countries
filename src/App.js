import "./App.css";
 import axios from 'axios';
 import { useEffect, useState } from 'react';
 import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import {  Route, Routes } from 'react-router-dom';

function App() {

  const [countriesArr, setCountriesArr] = useState([]);



   useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
       .then(response => {
        setCountriesArr(response.data);
     })
       .catch(e => console.log("error getting countries from API", e))
   }, [])


  return <div className="App">    <Navbar />
  <div className="container">
    <div className="row">
      <div className="col-4" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <CountriesList countriesArr={countriesArr} />
      </div>
      <div className="col-6">
        <CountryDetails countriesArr={countriesArr}/>
        <div>
          <Routes>
         
            <Route path="/:alpha3Code" element={ <CountryDetails countriesArr={countriesArr} />} />
          </Routes> 
        </div>
      </div>
    </div>
  </div>
</div>
}
export default App;