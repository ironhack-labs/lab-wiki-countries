import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<CountryDetailsPage />} />
          <Route path="*" element={ <h1>Page Not Found</h1> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;