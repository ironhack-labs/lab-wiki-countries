import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'



function App() {
  return <div

    className='App' >

    <Navbar />

    <Routes>
      <Route path='/' element={<CountriesList />} />
      <Route path='/details/:alpha3Code' element={<CountryDetails />} />




    </Routes>

  </div>;
}
export default App
