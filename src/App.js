import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
        .get(`https://ih-countries-api.herokuapp.com/countries`)
        .then((response) => {
            console.log('response.data', response.data);
            setCountries(response.data);
            setFetching(false);
        });

}, []);

  return <div className="App">
    <Navbar className="navbar" />

    <div className="container">
      <div className="row">
        <CountriesList countries={countries} fetch={fetching}/>
        <Routes>
          <Route path="/:countryId" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  </div >
}
export default App;