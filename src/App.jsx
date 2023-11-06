import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:alpha3Code" element={<CountryDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
