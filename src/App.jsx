import "./App.css";
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/:countryId" element={<CountryDetails></CountryDetails>}></Route>
    </Routes>
    </>
  );
}

export default App;
