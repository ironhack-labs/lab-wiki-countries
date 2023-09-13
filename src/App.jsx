import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


import "./App.css";
import CountryDetail from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route path="/countries" element={<HomePage />} />
          <Route path="/countries/:alpha3Code" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
