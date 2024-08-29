import "./App.css";
import HomePage from './pages/HomePage'
import CountryDetailPage from './pages/CountryDetailsPage'
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/:countryId" element={<CountryDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
