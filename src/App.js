// src/App.js
import { Routes, Route, NavBar } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import { useState , useEffect} from 'react';
import countriesFromDB from './countries.json';
import axios from 'axios';

function App() {
  const baseURL = 'https://ih-countries-api.herokuapp.com'
 {/* const { didUpdate, dependencyArray } = useEffect([])*/}
  const countriesFromDb = [...countriesFromDB]
  const [countriesList, setCountriesList] = useState(countriesFromDb);
  const [countriesFromAPI, setCountriesFromAPI] = useState([])
  useEffect(() => {
      axios.get(baseURL + "/countries")
          .then((response) => {
            setCountriesFromAPI(response.data);
          })
          .catch((e) => {
              console.log(e);
          });
  }, []);

  return (<div className="App">
    <Navbar />
    <Routes>
      <Route path='/countries' element={<CountriesList countriesList={countriesList} />}></Route>
      <Route path='/countries/:countryId' element={<CountryDetails countriesList={countriesList} />}></Route>
      <Route path={baseURL + '/countries'} element={<CountriesList countriesFromAPI={countriesFromAPI} />}></Route>
      <Route path={baseURL + '/countries/:countryId'} element={<CountriesList countriesFromAPI={countriesFromAPI} />}></Route>
    </Routes>
  </div>
  )
}
export default App;
