import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
