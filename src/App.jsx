import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import axios from "axios"

import CountriesList from './Components/CountriesList/CountriesList';
import Navbar from './Components/Navbar/Navbar';
import CountriesDetails from './Components/CountriesDetails/CountriesDetails';


import countriesData from './countries.json'


function App() {

  const [countries, setCountries] = useState([])

  const getAllData = () => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data)
        setCountries(response.data)
      })
      .catch((error) => console.log(error)
      )
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className='col-md-4'>

            <CountriesList countriesData={countries} />

          </div>
          <div className='col-md-8'>

            <Routes>

              <Route path="/countries/:country_id" element={
                <CountriesDetails countriesData={countries} />
              } />

            </Routes>

          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
