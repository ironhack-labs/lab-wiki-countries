import "./App.css";
import { Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Router>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:countryId" element={<CountryDetails/>}/>
      </Router>

    </div>
  );
}

export default App;
