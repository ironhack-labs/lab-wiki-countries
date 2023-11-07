import "./App.css";
import CountriesCard from "./components/CountriesCard";
import CountriesList from "./components/countriesList";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:countryId" element={<CountryDetails/>}/>
        <Route path="/countries" element={<CountriesList/>}/>
        <Route path="/countries/:alpha3Code" element={<CountryDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
