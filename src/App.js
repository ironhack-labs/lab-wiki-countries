import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountryList from './components/CountryList/CountryList';
import { Routes, Route } from 'react-router-dom'
import Page404 from './pages/Page404';
import CountriesPage from './pages/CountriesPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/countries' element={<CountriesPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>





      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
