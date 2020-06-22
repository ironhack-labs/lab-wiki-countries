import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import CountriesList from "./components/CountriesList";


function App() {
  return (
    <div className="App">
      <Route path="/" component={CountriesList} />

    </div>
  );
}

export default App;
