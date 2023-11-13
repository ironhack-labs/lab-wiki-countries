import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="/:alpha3Code" element={<CountryDetails />}/>
      </Routes>
      
      {/* <h1>LAB | React WikiCountries</h1> */}
    </div>
  );
}

export default App;
