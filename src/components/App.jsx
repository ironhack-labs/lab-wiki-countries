import './App.css'
import countries from './../countries.json'
import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Navbar />

      <section className='Body'>

        <div className='List'>
          <CountriesList countriesFromDb={countries} />
        </div>

        <article className='Details'>

          <Routes>
            <Route path="/:id" element={<CountryDetails countriesFromDb={countries} />} />
          </Routes>

        </article>
      </section>
    </div>
  )
}

export default App
