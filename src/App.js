import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from '../src/countries.json'

function App() {
  const [paises, setPaises] = useState([]);
  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(response => response.json())
      .then(data => setPaises(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='App-countries'>
        <CountriesList countries={paises} />
        <Routes>
          <Route path='/:alpha3Code' element={<CountryDetails countries={paises} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
