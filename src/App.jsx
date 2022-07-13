import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import countriesData from './countries.json'
import CountryDetails from './components/CountryDetails/CountryDetails'
import CountryBorders from './components/CountryBorders/CountryBorders'


function App() {

  const findBorders = () => {}

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList countriesData={countriesData} />

        <Routes>
          <Route path='/country/:alpha3Code' element={<CountryDetails countriesData={countriesData} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
