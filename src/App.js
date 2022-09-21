import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import CountriesList from './components/CountriesList/CountriesList.jsx'
import CountryDetails from './components/CountryDetails/CountryDetails';




function App() {
  return (
    <>
      <Navbar/>

      <div className = "container">
      <div className = "row">
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/:alpha3Code' element={<CountryDetails />} />


      </Routes>

      </div>
      </div>

    </>
  );
}

export default App;
