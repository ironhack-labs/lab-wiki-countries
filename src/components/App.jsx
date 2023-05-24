import { Route, Routes } from "react-router-dom";
import './App.css';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import Navbar from './Navbar/Navbar'
import axios from 'axios';
// import countriesData from '../countries.json';
import { useEffect, useState } from "react";


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(' https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
      })
  }, [])


  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row pt-2">

          <div className="col-3 CounterList-style ">
            <CountriesList elements={countries} />
          </div>

          <div className="col-9 CounterList-style card">
            <Routes>
              <Route path='/:id' element={<CountryDetails elements={countries} />} />
            </Routes>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
