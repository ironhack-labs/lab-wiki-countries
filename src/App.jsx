import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
 
      <Routes>
        <Route path="/" element ={<HomePage/>}></Route>
        <Route path="/:countryId" element = {<CountryDetails/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
