import "./App.css";
import CountriesList from "./components/CountriesList";
import countries from './countries.json'
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {

  // const [countries, setCountries] = countriesArr

  return <div className="App">
    <Navbar />

    <div className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:countryId" element={ <CountryDetails countries={countries}/> } />
        </Routes>
      </div>
    </div>
  </div>
}
export default App;