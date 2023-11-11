import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path="/countries/:alpha3Code" element={<CountryDetailsPage/>} />
      </Routes>
    </div>
  );
};

export default App;
