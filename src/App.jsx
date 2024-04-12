import './App.css'
import {Routes, Route} from 'react-router-dom'
import CountryDetailsPage from './pages/CountryDetailsPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <main>
      <h1>WikiCountries</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/country/details/:alpha3Code' element={<CountryDetailsPage/>}></Route>
      </Routes>
    </main>
  </>
  );
}

export default App;

