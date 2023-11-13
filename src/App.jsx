import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
    </div>

    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/:countryId' element={<CountryDetailsPage />} />
  </Routes>
  </>

  );
}

export default App;
