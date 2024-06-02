import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:alpha3Code" element={<CountryDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
