import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row">
          <CountriesList/>
          <Routes>
            <Route path="/:id" element={ <CountryDetails countries/>}/>
        </Routes>
          
        </div>
      </div>
      
    </>
  );
}

export default App;
