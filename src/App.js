import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import Navbar from './Components/Navbar';
import countriesData from "./countries.json";



function App() {
  return (
    <div className="App">

      <Navbar />
      <CountriesList countriesData={countriesData} />

      <Routes>
        <Route path="/:countryId" element={<CountryDetails countriesData={countriesData} />} />
      </Routes>

    </div>
  );
}

export default App;
