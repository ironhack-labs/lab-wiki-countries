import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import CountriesPage from './pages/CountriesPage';
import CountryDetail from './components/CountryDetail';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesPage />
          <Routes>
            {/* <Route path='/' element={<CountriesPage />} /> */}
            <Route path='/:idCountry' element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
