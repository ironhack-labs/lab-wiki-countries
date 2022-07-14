import './App.css'

import { Routes, Route } from 'react-router-dom'

import CountriesList from './components/CountriesList/CountriesList'

import Navbar from './components/Navbar/Navbar'

import countries from './countries.json'

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/:id" element={<CountriesList countriesData={countries} />} />

      </Routes>
      
    </div>


)
}

export default App

{/* <CountriesList
countriesData={countries} */}