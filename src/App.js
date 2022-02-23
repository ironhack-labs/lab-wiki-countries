import "./App.css";
import Countries from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import countries from './countries.json'
import {Routes, Route} from 'react-router-dom'

function App() {
  return <div className="App">
    <Navbar />
    <Countries countries={countries} />
    <Routes>
    <Route path='/countrydetails/:CountryDetails' element={<CountryDetails countries={countries}/> } />
    </Routes>
  </div>;
}
export default App;