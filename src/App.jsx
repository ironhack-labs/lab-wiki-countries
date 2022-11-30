import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountyDetails'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  return (

    <main className="App">

      <Navbar />
      <div className='row'>
        <div className='col-6'>
          <CountriesList />
        </div>
        <div className='col-6'>
          <Routes>
            <Route path='/countries/:country_alphaCode' element={<CountryDetails />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>


    </main>

  )
}

export default App
