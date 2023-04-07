import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(null)

  useEffect( () => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((countriesArr) => {
        setCountries(countriesArr.data)
        
      })
      .catch( err => console.log("error getting countries from API", err))
  })


  return <div className="App">
    <Navbar />
      <div className="container box">
      
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries} />}></Route>
          </Routes>
      </div>

  </div>;
}
export default App;
