import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Countries from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Countries />
        <Routes>
          <Route path='/:idCountry' element={<CountryDetails />} />
        </Routes>
      </div>
    </>
  )
}
export default App;