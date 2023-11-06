import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from '/src/pages/HomePage.jsx';
import CountryDetails from '/src/pages/CountryDetailsPage.jsx';
function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
