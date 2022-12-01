import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='d-flex'>
        <CountriesList countries={CountryDetails} />
      </div>

      <Routes>
        <Route path='countries/:country_id' element={<CountryDetails />}></Route>
        <Route path='countries' element={<CountriesList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
