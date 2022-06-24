import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";

import "./App.css";


function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = `WikiCountries`;

    axios({
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
      responseType: 'json'
    })
      .then(({ data }) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));

  }, [])


  return (<div className="App">
    <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: `90vh`, overflow: `scroll` }}>
          {isLoading ? <p>Loading...</p> : <CountriesList countries={countries} />}
        </div>

        <Routes>
          <Route path="/" element={<></>} />

          <Route path="/:alpha3Code" element={isLoading ? <p>Loading...</p> : <CountryDetails {...{ countries }} />} />
        </Routes>
      </div>

    </div>
  </div >);
}


export default App;