import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";

import "./App.css";


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    document.title = `WikiCountries`;
    
    const { data } = await axios({
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
      responseType: 'json'
    });

    setCountries(data);
  }, [])


  return (<div className="App">
    <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: `90vh`, overflow: `scroll` }}>
          <CountriesList countries={countries} />
        </div>

        <Routes>
          <Route path="/" element={<></>} />

          <Route path="/:alpha3Code" element={countries.length ? <CountryDetails {...{ countries }} /> : <p>Loading...</p>} />
        </Routes>
      </div>

    </div>
  </div >);
}


export default App;