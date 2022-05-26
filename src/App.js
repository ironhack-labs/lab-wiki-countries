import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import CountryDetails from './pages/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList />
          <Routes>

            <Route path='/:country' element = {<CountryDetails/>} />

          </Routes>
        </div>
          

        
        

      </div>
      

    </div>
  );
}

export default App;
