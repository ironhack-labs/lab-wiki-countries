import './App.css'
import Navbar from './Navbar'
import CountriesList from './CountriesList'

import countries from './../countries.json'


function App() {

  return (
    <>
      <Navbar />

      <CountriesList countries={countries} />
    </>
  )
}

export default App