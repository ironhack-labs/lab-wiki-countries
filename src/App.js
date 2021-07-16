import './App.css';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails"
import CountryList from "./components/CountriesList"

function App() {
  return (
    <>
    <Navbar/>
    <div className="main">
    <CountryList />
    <Route path="/:countryId" component={CountryDetails} />
    </div>

    </>
  );
}

export default App;
