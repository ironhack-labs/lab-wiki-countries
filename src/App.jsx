import { Routes, Route } from 'react-router-dom'
import "./App.css"
import countries from './countries.json'
import Navbar from './components/Navbar/Navbar'
import Countries from './components/CountriesList/CountriesList'
import CountryDetails from "./components/CountryDetails/CountryDetails"

function App() {
  return (
    <div className="App">

      <Navbar />
      <Countries countries={countries} />
      <Routes>
        <Route path='/countrydetails/:CountryDetails' element={<CountryDetails countries={countries} />} />
      </Routes>

    </div>
  ),
}
export default App;