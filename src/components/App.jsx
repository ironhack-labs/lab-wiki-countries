import CountryDetails from "../pages/CountryDetailsPage"
import HomePage from "../pages/HomePage"
import "./App.css"
import Navbar from "./Navbar/Navbar"

import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:alpha3Code' element={<CountryDetails />} />
      </Routes>

    </div>
  )
}

export default App
