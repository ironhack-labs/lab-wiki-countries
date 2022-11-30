import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'


function App() {

  return (<div className="App">

    <Navbar />

    <Routes>

      <Route path='/' element={<CountriesList />} />
      <Route path={`/:id`} element={<CountryDetails />} />

    </Routes>

  </div>




  )

}

export default App;
