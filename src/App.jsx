import { useEffect, useState } from 'react'
import axios from "axios";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import "./App.css";
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries/:alpha3Code' element={<CountryDetails />} />
      </Routes>
    </>
  )

}

export default App;
