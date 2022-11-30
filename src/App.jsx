import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountriesDetails from './components/CountriesDetails/CountriesDetails'


function App() {

  return (

    <main className='App'>

      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList/>}/>
        <Route path='/countries/:country_id' element={<CountriesDetails/>}/>      
      </Routes>
      
      
    </main>
  )
}

export default App;
