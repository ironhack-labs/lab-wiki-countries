import './App.css';
import CountriesList from './components/CountriesList';
import { Route, Routes } from "react-router-dom";
import PageLayout from './components/PageLayout';
import CountryDetails from './components/CountryDetails';
import countries from "./countries.json"

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path=":id" element={<CountryDetails countries={countries} />} />
      </Route>
    </Routes>    
  );
}
export default App;
