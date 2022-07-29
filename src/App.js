import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from './countries.json'
import { useState } from "react";


function App() {

  // console.log(countries);

  const [allCountries, setAllCountries] = useState(countries);

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
