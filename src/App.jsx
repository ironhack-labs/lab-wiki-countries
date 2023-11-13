import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
