
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {


  return (
    <main className="App">
      <Navbar />
      <div className='d-flex flex-row'>
        <CountriesList />
        <Routes>
          <Route path="/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </main>
  )
}
export default App;


