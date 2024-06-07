import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path= "/:countryId" element={<CountryDetails></CountryDetails>}></Route>
      </Routes>
      
    </div>
    </div>
  );
}

export default App;
