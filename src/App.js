import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountriesDetails/CountriesDetails';
import Navbar from './components/Navbar/Navbar';
import countries from './countries.json'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/:alpha3Code' element={<CountriesDetails countriesData={countries}/>} /> 
      </Routes>

      <CountriesList countriesData={ countries}/>

    </div>
  )
}

export default App;
