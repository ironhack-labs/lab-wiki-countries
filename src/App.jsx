import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar'
import CountryDetailsPage from "./pages/CountryDetailsPage";
import axios from "axios";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/:alpha3Code' element={<CountryDetailsPage />}></Route>
      </Routes>




    </div>
  );
}

export default App;
