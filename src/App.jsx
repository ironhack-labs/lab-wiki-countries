import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/:countryId" element={<CountryDetails/>}></Route>
      </Routes>
    </div>
  );
}