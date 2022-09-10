import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{display:'flex'}} >
        <CountriesList />
        <Routes>
          <Route path="/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
