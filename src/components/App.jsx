import './App.css';
import countries from './../countries.json';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />

      </Routes>


    </div>

    // <div className="App">
    //   <Navbar />

    //   <div className="container">
    //     <div className="row">
    //       <CountriesList countries={countries} />
    //       <Routes>
    //         <Route path="/:id" element={<CountryDetails countries={countries} />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
