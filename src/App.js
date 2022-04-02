import './App.css';
import { Routes, Route } from 'react-router'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='all'>
      
        <CountriesList />

        <Routes>
          <Route path="/countries/:name" element={<CountryDetail />} />
        </Routes>
    
      </div>
    </div>
  );
}

export default App;
