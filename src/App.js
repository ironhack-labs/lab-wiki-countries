import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/countriesList/CountriesList';
import CountryDetail from './components/countryDetail/CountryDetail';
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='country'>
         <CountriesList />
         <Routes>
          <Route path="/countries/:name" element={<CountryDetail />}></Route>
         </Routes>
      </div>
    </div>
  );
}

export default App;
