import './App.css';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails"
import CountryList from "./components/CountriesList"

function App() {
  return (
    <>
    <Navbar/>
    <CountryList></CountryList>
    <Route path="/:countryId" component={CountryDetails} />
    </>
  );
}

export default App;
