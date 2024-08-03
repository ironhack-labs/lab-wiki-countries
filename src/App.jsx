import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/country/:alpha3Code" element={<CountryDetailsPage />}/>
    </Routes>
    
    </>
  );
}

export default App;
