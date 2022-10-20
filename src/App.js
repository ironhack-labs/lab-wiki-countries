import "./App.css";
import {Routes, Route, Link, useParams} from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";



function App() {


  return (
  <div className="App">
   <Navbar/>
    <Routes>
        <Route path='/' element={<CountriesList/>} />
        <Route path='/:countryCode' element={<CountryDetails/>} />
    </Routes>

  </div>
);
}
export default App;