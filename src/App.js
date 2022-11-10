import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Countries />}>
            <Route path="/:countryCode" element={<CountryDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
