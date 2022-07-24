import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
//import data from './countries.json';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react';
function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(data => {
      data.json()
      .then(countries => {
        setCountries(countries)
      })
    })
    .catch("error en el useEffect", console.log)
  }, [])

  return (

    <Router>
       <Navbar />

       <div className="container layout">

       <CountriesList data={countries} />
        <Routes>
          <Route path="/:alpha3Code" element={ <CountryDetails data={countries}/>} />
       </Routes>

      </div>

    </Router>
    
  );
}

export default App;
