import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from "./components/CountryDetails"
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [dataAPI, setDataAPi] = useState([]);

  useEffect(() => {
    axios.get(` https://ih-countries-api.herokuapp.com/countries`)
      .then(response => {
        setDataAPi(response.data)

      })
      .catch(e => console.log("error getting data from API"))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="row">
          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
            <CountriesList countries={dataAPI} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={dataAPI} />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
