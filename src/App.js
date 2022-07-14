import "./App.css"
import Navbar from './components/Navbar/Navbar'
import CountriesList from "./components/CountriesList/CountriesList"
import countries from './countries.json'
import CountryDetails from "./components/CountryDetails/CountryDetails"
import { Routes, Route } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Navbar />
      < CountriesList countriesFromApi={countries} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countriesFromApi={countries} />} />



      </Routes>

    </div>
  )
}
export default App;
