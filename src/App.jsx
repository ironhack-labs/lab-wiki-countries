import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <main className="App">
      <Navbar />
      <div className='d-flex flex-row'>
        <div>
          <CountriesList />
        </div>

        <div>

          <Routes>
            <Route path='countries/:country_id' element={<CountryDetails />}></Route>

          </Routes>
        </div>

      </div>
    </main>
  )
}

export default App
