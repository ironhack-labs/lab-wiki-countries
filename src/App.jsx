import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/:countryId" exact element={<CountryDetails/>} />
        </Routes>
      </div>
  );
}

export default App;
