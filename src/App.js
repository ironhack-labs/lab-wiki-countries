import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import countriesJson from "./countries.json";



function App() {

  const [countriesArr, setCountriesArr] = useState(countriesJson);
  //console.log(countriesArr[0]);


  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        const newList = response.data
        setCountriesArr(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesArr}/>
          <Routes>
            <Route path='/:countryCode' element={<CountryDetails country={countriesArr}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;