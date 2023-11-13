import { Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  console.log("app")
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
