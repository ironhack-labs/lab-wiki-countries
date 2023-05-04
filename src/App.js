import { useState } from 'react';
import './App.css';
import Countries from './countries.json';
import Navbar from './component/Navbar';
import CountryDetails from './component/CountryDetails';
import CountriesList from './component/CountriesList';
import {Routes,Route} from "react-router-dom"

function App() {
  const [countries, setCountries] = useState(Countries);

  return (
    <div className="App">
      <Navbar></Navbar>

      <CountriesList countries={countries}></CountriesList>
      <Routes>
          <Route path='/:countryId' element={<CountryDetails countries={countries}/>}></Route>

      </Routes>
    </div>
  );
}
export default App;
