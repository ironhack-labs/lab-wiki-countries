import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import CountryDetails from "./pages/CountryDetailsPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">

      <Navbar className = "nav"/>
      <Routes>
    
         <Route path= "/" element ={<HomePage/>}/>
         <Route path= "/:countryId" element ={<CountryDetails />}/>



      </Routes>

    </div>
  );
}

export default App;
