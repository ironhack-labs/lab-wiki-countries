import './App.css';
import countries from './countries.json';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';

function PageLayout() {
  return (
    <div className="layout">
      <Navbar />
      <CountriesList countries={countries} />
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
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<h1>My cool countries app</h1>} />
          <Route
            path=":alpha"
            element={<CountryDetail countries={countries} />}
          />
          <Route path="*" element={<h1>404 - There's nothing here!</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
