import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
// import countries from './countries.json'
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setAllCountries(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  })

  return (
    <div className="App">

      <Navbar/>

      <div className="container">
          <div className="row">
          <CountriesList data={allCountries} />

          <Routes>
            <Route path="/:id" element={ <CountryDetails data={allCountries} /> } />
          </Routes>

          </div>
      </div>
  </div>
)
}
export default App;
