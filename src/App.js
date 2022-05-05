import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails'
import Country from './countries.json'


function App() {
  return (


    <div className='Container'>
      <div className='row'>
        <Navbar />
        <div className='col-6'>

          <CountriesList />

        </div>
        <div className='col-6'>
          <Routes>
            < Route path="/:id" element={< CountryDetails Country={Country} />} />
          </Routes>

        </div>






      </div>
    </div>



  );
}

export default App;
