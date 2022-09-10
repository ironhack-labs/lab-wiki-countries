import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList />
      <Routes>
        <Route path='/:id' element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
