import './App.css';
import { Routes, Route } from 'react-router-dom';
import PhoneList from './components/CountriesList/PhoneList';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';
import phonesData from "./phones.json";


function App() {

  return (
    <>

      <PhoneList phonesData={phonesData} />
      <Routes>
        {/* <Route path="/" /> */}
        {/* <Route path="/countries" element={<CountriesList countriesData={countriesData} />} /> */}
        <Route path="/phone/:id" element={<p>No arriesgo</p>} />
      </Routes>
    </>
  );
}

export default App;
