import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  //const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:countryId" element={<CountryDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
