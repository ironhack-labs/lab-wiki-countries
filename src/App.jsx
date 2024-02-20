import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
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
