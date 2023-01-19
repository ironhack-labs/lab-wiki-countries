// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar"
import countries from "./countries.json"

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route path='/:alphaCode' element={<CountryDetails countriesArray={countries} />} />

          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;
