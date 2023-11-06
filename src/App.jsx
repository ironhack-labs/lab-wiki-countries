import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/:countryId" element={<CountryDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
