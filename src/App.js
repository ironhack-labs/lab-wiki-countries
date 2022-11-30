import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path={`/:alpha3Code`} element={<CountryDetails />} />
      </Routes>
    </main>
  )
}

export default App;
