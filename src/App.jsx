import './App.css'
import { Route, Routes } from 'react-router-dom'
import countries from './countries.json'
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        < CountriesList countries={countries} />
        <Routes>
          <Route path='/:alpha3Code' element={< CountryDetails countries={countries} />}></Route >
        </Routes>
      </div>

    </div>
  );
}

export default App;






