import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './CountriesList/CountriesList';
import { CountryDetails } from './CountryDetails/CountryDetails';
import './App.css';

function App() {      
  return (
    <div className="App">
      <div className='container'>
        <div className='App-block d-flex mt-5'>
          <CountriesList/>
          <Routes>
            <Route path='/:code' element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
