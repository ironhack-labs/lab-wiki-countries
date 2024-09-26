import "./App.css";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom"
import CountriesList from "./Components/CountriesList";
import CountryDetails from "./Components/CountryDetails"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

function App() {
  const [countries,setCountries] = useState(null)

 useEffect(()=>{
  axios.get('https://ih-countries-api.herokuapp.com/countries')
  .then((countries)=>{setCountries(countries.data)})
  .catch((error)=>{
   console.log(error)
  })
 },[])
 if (countries === null) {
  return <div>Cargando...</div>;
}


return (<div className="App">

<Navbar></Navbar>

<Routes>
  <Route path="/" element={<CountriesList  countries={countries} setCountries={setCountries}/>} ></Route>
  <Route path="/:alpha3code" element={<CountryDetails countries={countries} setCountries={setCountries} />} ></Route>

</Routes>
  </div>)
}
export default App;