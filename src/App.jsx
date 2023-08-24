
import { Route, Routes } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from './pages/CountryDetailsPage';

const App = () =>{



  return(

    <div className="App">

        <Navbar />

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/:alpha3Code' element={<CountryDetailsPage />} />
        
        </Routes>

    </div>



  )
}

export default App;
