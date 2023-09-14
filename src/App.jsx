import "./App.css";
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {

  

  return (

    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:countryId' element={<CountryDetailsPage/>} />
      </Routes>


      <HomePage />
    </div>
   
  );
}


export default App;
