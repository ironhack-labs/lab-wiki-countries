import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
      fetch(`https://ih-countries-api.herokuapp.com/countries`)
        .then((result) => {
          return result.json()
        })
        .then((info) => setCountries(info))
        
        .catch(err => console.log(err))
    }, [])
    
    // Cadenero que espera la respuesta del servidor
    
      
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
            <Routes>
                <Route path="/:id" element={ <CountryDetails countries={countries} /> } />
            </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
    
    
}

export default App;
