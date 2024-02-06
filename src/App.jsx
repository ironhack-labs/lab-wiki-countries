import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />

      </Routes>
    </div>
  );
}

export default App;
