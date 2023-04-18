import './App.css';
import { useState } from 'react';
import countriesData from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails"
import { Route, Routes } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState(countriesData)

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
