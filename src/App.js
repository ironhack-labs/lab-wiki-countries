import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <CountriesList />
        <Routes>
          <Route path="/:code" element={<CountryDetails />}>Home</Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;