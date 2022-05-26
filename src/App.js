
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

import { Routes, Route } from "react-router-dom";  

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route path="/countrylist" element={<CountriesList />} /> 
         <Route 
          path="/:countryId" 
          element={ <CountryDetails /> } 
        />       
      </Routes>
      
    </div>
  );
}

export default App;
