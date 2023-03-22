import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import countriesJson from './countries.json'
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails/CountriesDetails";

function App() {

  const [countries, setCountries] = useState([...countriesJson]);

  useEffect(() => {
  }, [])

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<CountriesList list={ countries } />} />
          <Route path="/detail/:code" element={ <CountriesDetails list={ countries } /> } />
        </Routes>
      </div>
  );
}

export default App;