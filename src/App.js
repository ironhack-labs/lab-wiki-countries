import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/NavBar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";

import axios from 'axios'


function App() {

  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fecthCountries();
  }, []);

  const fecthCountries = () => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
        setFetching(false)
      })
      .catch(err => console.log(err))
  }

  return (<div className="App">
    <div className="nav">
      <Navbar />
    </div>
    <div className="cols">

      {
        fetching ? <h1>Cargando</h1> : <CountriesList countriesDat={countries} />
      }

    </div>
    <div className="cols">
      <Routes>
        <Route path='/:countryID' element={<CountryDetails state='true' />} />
      </Routes>
    </div>

  </div>)
}
export default App;



