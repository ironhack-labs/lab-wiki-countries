import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countrydetails/:alpha3Code" element={<CountryDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
