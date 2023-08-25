import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/:countryId" component={CountryDetailsPage} />
      </div>
    </Router>
  );
}

export default App;
