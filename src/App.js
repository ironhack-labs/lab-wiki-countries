import {Routes, Route} from 'react-router'
import CountriesDetails from './CountriesDetails/CountriesDetails';
import CountriesList from './CountriesList/CountriesList';
import NavBar from './Navbar/Navbar';

function App() {
  return (
    <div className="App container">
     <NavBar/>
   
      <Routes>
      <Route path="/" element={<CountriesList/>}></Route>
      <Route path="/countriesDetail/:id" element={<CountriesDetails/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
