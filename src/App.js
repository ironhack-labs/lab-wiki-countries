import axios from 'axios';
import './App.css';
import { Route, Routes } from "react-router-dom";
//import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {
  const [countriesList, setcountriesList] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then( response => {
        setcountriesList(response.data);
      })
      .catch(e => console.log("error getting characters from API", e));
  }, []);


  return (
    <div className="App">
    <div className="container">             
      <Navbar />
      <div className="row">
      <CountriesList countriesList={countriesList}/>
      <Routes>
      <Route path={`/:id`} element={ <CountryDetails /> } />
      </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
