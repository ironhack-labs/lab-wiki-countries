import './App.css';
import Navbar from './components/Navbar';
// import CountriesList from './components/CountriesList';

import HomePage from './pages/HomePage';

import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <CountriesList /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
