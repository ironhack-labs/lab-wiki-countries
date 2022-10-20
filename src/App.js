import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import countriesJson from "./countries.json";



function App() {

  const [countriesArr, setCountries] = useState(countriesJson);
  //console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path='/:countryCode' element={<CountryDetails country={country}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;