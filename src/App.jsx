import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/:countryId" element={ <CountryDetailsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
