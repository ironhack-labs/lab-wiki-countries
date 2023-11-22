import "./App.css"
import HomePage from "./pages/HomePage"
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import CountryDetails from "./pages/CountryDetailsPage"





function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetails />} />
      </Routes>
    </div>


  )
}
export default App
