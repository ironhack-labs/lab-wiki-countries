import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import countries from './countries.json';

function App() {
  return (<div className="App">
    <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: `90vh`, overflow: `scroll` }}>
          <CountriesList />
        </div>

        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>

    </div>
  </div >);
}


export default App;