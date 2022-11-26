import "./App.css";
import NavbarComp from './components/NavbarComp';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function Page() {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <div className="row">
          <Outlet />
        </div> 
      </div>
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        setCountries(response.data);
      }).catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Page />}>
        <Route index element={<CountriesList countries={countries} />} />
        <Route path={"/:countryId"} element={[<CountriesList countries={countries} />, <CountryDetails countries={countries} />]} />
      </Route>
    </Routes>
  );
}

export default App;