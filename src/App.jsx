import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
