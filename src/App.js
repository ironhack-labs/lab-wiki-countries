import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countriesData from "./countries.json"
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />

        <CountriesList countriesData={countriesData} />

        <Routes>

          <Route path="/:countryId" element={<CountryDetails countriesData={countriesData} />} />

        </Routes>


    </div>
  )  
}

export default App;
