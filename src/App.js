import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import CountriesList from './components/CountriesList/CountriesList'
import CountriesDetails from './components/CountryDetails/CountryDetails';
import countriesFromJson from './countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { useState, useEffect } from "react";




function App() {
  
  const [countriesList, setCountries] = useState([])

  useEffect(() => {           // Simulación de API call actualizando el estado
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
  }, [])

  return (

    < div className="App" >
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CountriesList countries={countriesList} />
          </div>
          <div className="col-md-6">
            <Routes>
              <Route path='/:id' element={<CountriesDetails countries={countriesFromJson}/>}></Route> 
            </Routes></div>
        </div>

      </div>
    </div >

    // ...
  );
}

export default App;
