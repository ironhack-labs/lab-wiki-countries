import './App.css'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"





function App() {
  return (

    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/countries/:country_id' element={<CountryDetails />} />
      </Routes>



    </div>

  )
}

export default App;
