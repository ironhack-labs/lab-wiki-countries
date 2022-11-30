import { Route, Routes } from 'react-router-dom'
import './App.css'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar'



function App() {

  return (

    <main className='App'>

      <Navbar />

      <div className='d-flex flex-row'>

        <div>
          <CountriesList />
        </div>



        <div>
          <Routes>
            <Route path='/:country_id' element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
