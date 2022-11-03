import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />

      <Routes>{/* <Route path='' element={CountriesList}/> */}</Routes>
    </div>
  );
}

export default App;
