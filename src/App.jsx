import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:countryId" element={<CountryDetails />}></Route>
      </Routes>

    </div>
  );
}

export default App;
