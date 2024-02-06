import "./App.css";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom"
import CountriesList from "./Components/CountriesList";
import CountryDetails from "./Components/CountryDetails"
import countriesJson from "./countries.json"
import { useState } from "react";

function App() {
const [countries,setCountries] = useState(countriesJson)


  return (<div className="App">

<Navbar></Navbar>

<Routes>
  <Route path="/" element={<CountriesList  countries={countries} setCountries={setCountries}/>} ></Route>
  <Route path="/:alpha3code" element={<CountryDetails countries={countries} setCountries={setCountries} />} ></Route>

</Routes>
  </div>)
}
export default App;