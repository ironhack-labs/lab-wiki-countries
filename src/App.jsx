import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Routes, Route } from "react-router-dom"
import countries from "./countries.json"
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes>
        <Route path='/:countryId' element={<CountryDetails data={countries} />} />

      </Routes>
    </div>
  );
}

export default App;
