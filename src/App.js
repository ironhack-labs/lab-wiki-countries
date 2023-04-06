import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
// import countries from './countries.json'
import CountriesList from "./components/CountriesList";
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import {Route,Routes }from "react-router-dom";


function App() {
// let countriesFromJson = countries;
const baseURL="https://ih-countries-api.herokuapp.com";
const [countriesArr, setCountriesArr] = useState([]);

useEffect(() => {
  axios
    .get(baseURL + '/countries')
    .then((response) => {
      setCountriesArr(response.data);
    })
    .catch((err) => {
      console.log("error getting countries from API", err);
    }); 
}, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList countriesArr={countriesArr} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countriesArr={countriesArr} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );}

  
export default App;
  