import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
  <div>
    <Router>
<Navbar/>
<CountriesList countries={countries}/>

<Routes>
<Route path="/:alpha3Code" 
element={ <CountryDetails 
countriesData={countries} /> } />
</Routes>
</Router>
  </div>
  )
}
export default App;