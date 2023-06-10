import './App.css';
import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';

function PageLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country">
            <Route path=":alpha" element={<CountryDetail />} />
          </Route>
          <Route path="*" element={<h1>404 - There's nothing here!</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
