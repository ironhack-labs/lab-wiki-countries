import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/:countryId" element={<CountryDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
