import { Routes, Route } from 'react-router'
import CountriesDetails from './CountriesDetails/CountriesDetails';
import CountriesList from './CountriesList/CountriesList';
import NavBar from './Navbar/Navbar';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path="/" element={<CountriesList />}></Route>
            <Route path="/:id" element={<CountriesDetails />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
