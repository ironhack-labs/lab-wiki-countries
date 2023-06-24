import { Routes, Route, Link } from "react-router-dom";
import CountryDetails from "./pages/CountryDetailsPage";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <h1>LAB | React WikiCountries</h1>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":countryId/" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
