import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import countryArr from './data/countries.json'
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {


  const [countries, setCountries] = useState(countryArr)




  return (

    <div className="App">

      <Navbar />


      <Routes>
        <Route path="/:codeAlpha" element={<CountryDetails countrySelected={countries.alpha3Code} />} />



          <Route path="/" element={countries.map((country, index) => {
            return <CountriesList listOfCountries={country} key={index} />
          })} />
      </Routes>

    </div>

  )
}


export default App;