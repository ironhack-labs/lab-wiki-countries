import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  return <div className="App">
    <Navbar />

    <div className="container">

      <div className="row">

        <div className="col">

          <CountriesList />

        </div>

        <div className="col">

          <Routes>
            <Route path="/country-details/:countryCode" element={<CountryDetails />} />
          </Routes>

        </div>

      </div>

    </div>

    
    
  </div>
}
export default App;
