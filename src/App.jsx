import "./App.css";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/:countryId" element={<CountryDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
