import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/navbar';
import CountriesList from './components/Navbar/countriesList/CountriesList';
import CountriesDetails from './components/Navbar/CountryDetails/CountryDetails';



function App() {
  return (
    < div className="App" >


      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-6'><CountriesList /></div>

          <div className='col-6'>

            <Routes>

              <Route path='/details/:countrie_id' element={<CountriesDetails />} />

            </Routes>
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
