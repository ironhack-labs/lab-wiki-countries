import "./App.css";
import countriesJSON from "./countries.json"
import { useState } from "react"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList";

function App() {
  const [countries, setCountries] = useState(countriesJSON)

  return <div className="App">
    <Navbar/>


    </div>;
}
export default App;