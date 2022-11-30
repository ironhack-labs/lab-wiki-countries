import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar'
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <main className="App">
      <Navbar />

      <div className='d-flex'>
        <CountriesList />

        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;
