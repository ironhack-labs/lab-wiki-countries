import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";  
import HomePage from "./pages/HomePage";   
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
