import "./App.css";
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="container">
      <h1 className="mt-3">LAB | React WikiCountries</h1>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/country/:alpha3Code" element={<CountryDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
