import "./App.css";
import {Routes, Route} from 'react-router-dom';
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:countryId' element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
