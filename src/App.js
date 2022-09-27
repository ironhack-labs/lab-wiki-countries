import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountryList></CountryList>
      <Routes>
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
export default App;
