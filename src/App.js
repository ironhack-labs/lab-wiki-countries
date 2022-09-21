import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <>
      <NavBar />
      <div className="layout">
        <CountriesList />
        <Routes>
          <Route path='/country-details/:id' element={<CountryDetails />} />
        </Routes>
      </div>




    </>
  );
}

export default App;
