import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState } from 'react'


function App() {

  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <NavBar />
      <div style={{display:'flex'}} >
        <CountriesList countries ={countries}/>
        <Routes>
          <Route path="/:id" element={<CountryDetails countries ={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
