import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
      {/* <h1>LAB | React WikiCountries</h1> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
