
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countriesArr from "./countries.json"


function App() {

  return (
    <>
    <div className="App">
    <Navbar/>
<Routes>

  <Route path="/" element={<CountriesList countriesArr={countriesArr}/>}/>
  <Route path="/:id" element={<CountryDetails countriesArr={countriesArr}/>}/>
</Routes>

   
    </div>
    </>
  );
}

export default App;
