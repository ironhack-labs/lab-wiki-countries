
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import CountryList from './components/CountryList/CountryList';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/details/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default App;