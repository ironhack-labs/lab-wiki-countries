import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
