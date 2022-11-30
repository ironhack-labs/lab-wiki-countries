import './App.css'
import CountriesList from './components/CountriesList/CountriesList'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {
  return (<div className='App'>

    <Navbar />

    <div className="container">
      <div className="row">
        <div className="col-6">
          <CountriesList />
        </div>

        <div className="col-6">


          <Routes>

            <Route path='/:alpha3Code' element={<CountryDetails />} />

          </Routes>

        </div>
      </div>
    </div>



  </div>)
}

export default App
