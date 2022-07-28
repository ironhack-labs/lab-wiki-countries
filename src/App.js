import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList";


function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((info) => info.json())
      .then((datos) => {
        setCountries(datos);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <CountriesList />
      </div>
    </div>             
  )
}
export default App;