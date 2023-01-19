import './App.css';
import countriesListJson from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [countriesList, setCountriesList] = useState(countriesListJson)

  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route className="route" path ="/" element ={<CountriesList countriesList={countriesList}/>} />
          <Route path ="/countries/:alpha3code" element ={<CountryDetails countriesList={countriesList} />}  />
        </Routes>
      </div>
    

    </div>
  );
}

export default App;