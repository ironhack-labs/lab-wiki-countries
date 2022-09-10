import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import {Routes, Route, useParams} from 'react-router-dom'
import countries from "./countries.json"
import CountryDetails from "./components/CountryDetails";

function App() {

return (
<div className="App">
    <Navbar />
    <CountriesList countries={countries}/>
    <Routes>
        <Route path="/:a3" element={<CountryDetails data={countries}/>} />
      </Routes>
      
  </div>
)
}
export default App;