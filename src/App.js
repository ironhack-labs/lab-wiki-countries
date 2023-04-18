import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails"
import { Route, Routes } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then(response => response.json())
      .then(data => setCountries(data.reverse()))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList data={countries}/>
          <Routes>
            <Route path="/:id" element={ <CountryDetails data={countries}/> }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
