import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='testContainer'>
      <div className='testList' >
        <CountryList />
      </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

export default App;
