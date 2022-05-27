import './App.css';
import Navbar from './components/Navbar';
import Countries from './components/CoutriesList';
import CountriesDetails from './components/CoutriesDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/coutries/:id" element={<CountriesDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
