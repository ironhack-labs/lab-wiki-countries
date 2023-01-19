import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from "./components/Navbar"
import axios from 'axios';
import { useState } from "react";

function App() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const basicURL = "https://ih-countries-api.herokuapp.com/countries";
  useEffect(() => {
    axios
      .get(basicURL)
      .then((res) => {
        setListOfCountries(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container text-center position-relative">
        <div className="col-5">
          <CountriesList listOfCountries={listOfCountries} />
          <div className="col-6 position-absolute top-0 end-0">
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
