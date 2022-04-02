import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <div className=' d-flex flex-row'>

          <CountriesList />
          <Routes>
            <Route path="/:id" element={<CountryDetails />}></Route>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
