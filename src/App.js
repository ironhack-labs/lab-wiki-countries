import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className='row'>
            <CountriesList countries={countries} />
        </div>
      </div>
      <CountriesList />

      <Routes>
        {countries.map(country => {
          return <Route key={`/${country.alpha3Code}`} path="/:countryCode" element={<CountryDetails countries={countries} />} /> 
        })}
      </Routes>
    </div>
  );
}

export default App;
