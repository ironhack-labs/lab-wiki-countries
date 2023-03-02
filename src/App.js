import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';

import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>

          <div className='col-5
          '>
            <CountriesList countries={countries} />
          </div>
          <div className='col-7'>
            {<Routes>

              <Route path='/:country_id' element={<CountryDetails countries={countries} />}></Route>
            </Routes>
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;
