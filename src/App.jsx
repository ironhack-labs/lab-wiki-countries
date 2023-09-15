import axios from "axios";
import { useEffect, useState } from "react";

import { Route ,Routes} from "react-router-dom";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from './pages/HomePage';

import "./App.css";

function App() {

        
  return (
<>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetails />} />
    </Routes>
    </>
  );
}

export default App;
