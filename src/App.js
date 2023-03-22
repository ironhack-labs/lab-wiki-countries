import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">


    <Navbar/>

    <CountriesList/>

    <Routes>
      <Route path='/:id' element={<CountryDetails/>}/>

      

    </Routes>
    

  </div>;
}
export default App;
